const mysql = require('mysql');
const inquirer = require('inqirer');

var connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});



// View departments function


// View Roles function


// View Employees function


// ADD department function


// ADD role function


// ADD employee function (async function)


// Update role function