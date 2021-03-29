const util =require('util')
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

connection.query = util.promisify(connection.query);

function init(){
    inquirer.prompt([{

    }])
}

function createDepartment(){
    inquirer.prompt([
    {
        type: 'list',
        name: "Department Nme",
        choices: ["Sales", "Customer Service", "Human Resources", "Engineering", "Quality Control", "Cyber Security"]
    },
    ]),
}

function createRole(){
    inquirer.prompt([
    {
        type: 'list',
        name: 'Employee Role',
        choices: ['Sales Person', 'CSR', 'HR specialist', 'Software Engineer', "Software Tester", 'Cyber Security Specialist']
    },
    ]),
}

function createEmployee(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'Employee First Name',
            message: 'Please input the employee\'s first name.'
        },
        {
            type: 'input',
            name: 'Employee Last Name',
            message: 'Please input the employee\'s last name.'
        },
    ])
}

module.exports = connection