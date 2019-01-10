const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

require('dotenv').config();

const app = express();

const port = process.env.SERVER_PORT || 8000;

const pool = new Pool({
    database: process.env.DB_DB,
    user:     process.env.DB_USER,
    password: process.env.DB_PASS,
    host:     process.env.DB_HOST,
    port:     process.env.PORT,
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

pool
    .connect()
    .then(client => {
        require('./app/routes')(app, client);
    });

const server = app.listen(port, () => {
    console.log(`Server running -> PORT ${server.address().port}`)
});
