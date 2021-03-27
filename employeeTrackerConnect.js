const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3750,
    user: 'root',
    password: '',
    database: 'employee_trackerDB',
});

connection.connect((err) => {
    if err throw err;
    console.log('connected as id ${connection.threadId}');

    init();
});

function init(){
    inquirer.prompt([{

    }])
}

function createDepartment(){
    inquirer.prompt([{

    }])
}

function createRole(){
    inquirer.prompt([{

    }])
}

function createEmployee(){
    inquirer.prompt([{
        
    }])
}