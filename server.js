const mysql = require('mysql');
const inquirer = require('inqirer');
const { start } = require('repl');

var connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});