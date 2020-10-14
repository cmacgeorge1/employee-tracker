const mysql = require('mysql');
const inquirer = require('inquirer');

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

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add department",
                "Add role",
                "Add employee",
                "Update employee role",
                "Quit"
            ]
        })
    .then(function(answer) {
        if (answer.action === 'View all departments') {
            viewDepartments();
        } else if (answer.action === 'View all roles') {
            viewRoles();
        } else if (answer === 'View all employees') {
            viewEmployees();
        } else if (answer.action === 'Add department') {
            addDepartment();
        } else if (answer.action === 'Add role') {
            addRole();
        } else if (answer.action === 'Add employee') {
            addEmployee();
        } else if (answer.action === 'Update employee role') {
            updateEmployee();
        } else if (answer.action === 'Quit') {
            connection.end();
        }
    })
}

// View departments function
function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        console.log(`DEPARTMENTS;`)
        res.forEach(department => {
            console.log(`ID: ${department.id} | Name: ${department.name}`)
        })
        runSearch();
    })
}

// View Roles function
function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
        console.log(`ROLES;`)
        res.forEach(department => {
            console.log(`ID: ${role.id} | Title: ${role.salary} | Department ID: ${role.department_id}`)
        })
        runSearch();
    })
}

// View Employees function
function viewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        console.log(`EMPLOYEES;`)
        res.forEach(department => {
            console.log(`ID: ${employee.id} | Name: ${employee.first_name} ${employee.last_name} | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`);
        })
        runSearch();
    })
}

// ADD department function
function addDepartment() {
    inquirer
        .prompt({
            name: "department",
            type: "input", 
            message: "What is the name of the department?"
        })
        .then(function(answer) {
            var query = "INSERT INTO department (name) VALUES (?)";
            connection.query(query, answer.department, function(err, res) {
                console.log(`Department added: ${(answer.department).toUpperCase()}`)
            })
            viewDepartments();
        })
}

// ADD role function
function addRole() {
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw (err);
    inquirer
        .prompt ([{
            name: "title",
            type: "input",
            message: "What is the new role?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of this role?"
        },
        {
            name: "departmentName",
            type: "list",
            message: "Which department is this role under?",
            choices: function(){
                var choicesArray = [];
                res.forEach(res => {
                    choicesArray.push(
                        res.name
                    );
                })
                return choicesArray
            }
        }])
        .then(function(answer) {
            const department = answer.departmentName;
            connection.query('SELECT * FROM DEPARTMENT', function(err, res) {
                if (err) throw (err);
                let filteredDept = res.filter(function(res) {
                    return res.name == department;
                })
                let id = filteredDept[0].id;
                let query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
                let values = [answer.title, parseInt(answer.salary), id]
                console.log(values);
                connection.query(query, values, function(err, res, fields) {
                    console.log(`Role added: ${(values[0].toUpperCase())}.`)
                })
                viewRoles();
            })
        })
    })
}

// ADD employee function (async function)


// Update role function