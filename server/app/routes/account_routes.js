import { api_v } from '../../constants';
const { getUserByID, getUserByLogin, setUser, deleteUserByID, updateUserByID } = require('../queries/account/');

module.exports = function (app, db) {
    app.get(api_v + '/account/:id', (app_req, app_res) => {
        getUserByID(app_req, app_res, db);
    });
    app.put(api_v + '/account/:id', (app_req, app_res) => {
        updateUserByID(app_req, app_res, db);
    });
    app.delete(api_v + '/account/:id', (app_req, app_res) => {
        deleteUserByID(app_req, app_res, db);
    });
    app.post(api_v + '/account', (app_req, app_res) => {
        setUser(app_req, app_res, db);
    });
    app.get(api_v + '/account', (app_req, app_res) => {
        getUserByLogin(app_req, app_res, db);
    });
};