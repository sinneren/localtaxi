import uuidv4 from 'uuid/v4';
import pswhash from 'password-hash';

const getUserByID = (app_req, app_res, db) => {
    const text = 'SELECT * FROM app_user WHERE id = $1';
    const values = [app_req.params.id];

    db.query(text, values, (db_err, db_res) => {
        if (db_err) {
            console.log('Error Connecting:', db_err);
            return;
        } else {
            app_res.status(200).json(db_res.rows[0]);
        }
    });
}
const getUserByLogin = (app_req, app_res, db) => {
    const text = 'SELECT * FROM app_user WHERE email = $1';
    const values = [app_req.query.email];

    db.query(text, values, (db_err, db_res) => {
        if (db_err) {
            console.log('Error Connecting:', db_err);
            return;
        } else {
            if (db_res.rowCount === 1) {
                if (pswhash.verify(app_req.query.password, db_res.rows[0].password_hash)) {
                    app_res.status(200).json(db_res.rows[0]);
                } else {
                    app_res.status(200).json({ uuid: null });
                }
            } else {
                app_res.status(200).json({uuid: null});
            }
        }
    });
}
const setUser = (app_req, app_res, db) => {
    const text = 'INSERT INTO app_user(uuid, email, password_hash) VALUES($1, $2, $3) RETURNING *';
    const values = [uuidv4(), app_req.body.email, pswhash.generate(app_req.body.password)];

    db.query(text, values, (db_err, db_res) => {
        if (db_err) {
            console.log('Error Connecting:', db_err);
            return;
        } else {
            app_res.status(201).json(db_res.rows[0].uuid);
        }
    });
}
const deleteUserByID = (app_req, app_res, db) => {
    const text = 'DELETE FROM app_user WHERE id = $1';
    const values = [app_req.params.id];

    db.query(text, values, (db_err) => {
        if (db_err) {
            console.log('Error Connecting:', db_err);
            return;
        } else {
            app_res.status(200).send(app_req.params.id);
        }
    });
}
const updateUserByID = (app_req, app_res, db) => {
    const text = 'UPDATE app_user SET name = $1, password = $2 WHERE id = $3';
    const values = [app_req.body.name, app_req.body.password, app_req.params.id];

    db.query(text, values, (db_err) => {
        if (db_err) {
            console.log('Error Connecting:', db_err);
            return;
        } else {
            app_res.status(200).send(app_req.params.id);
        }
    });
}

module.exports = {
    getUserByID,
    getUserByLogin,
    setUser,
    deleteUserByID,
    updateUserByID,
}