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
    if (err) throw (err);
    console.log('connected as id ${connection.threadId}');

    init();
});

connection.query = util.promisify(connection.query);

function init(){
    inquirer.prompt([{
        type: 'list',
        name: 'userOptions',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'Add department',
            'View all roles',
            'Add role',
            'View all employees',
            'Add employee',
            'Edit employee role',
            'Exit'
        ]
    }]).then(function(response){
        switch(response.userOptions){
            case 'View all Departments':
                viewDepartments();
                break;
            case "Add department":
                addDepartment();
                break;
            case 'view all roles':
                viewRoles();
                break;
            case 'Add role':
                addRole();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'Edit employee role':
                editRole();
                break;
            case 'Exit':
                default: connection.end();
        }
    })
}

function addDepartment(){
    inquirer.prompt([
    {
        type: 'list',
        name: "Department Name",
        choices: ["Administration", "Software Development", "Quality Control"]
    },
    ]),
}

function addRole(){
    inquirer.prompt([
    {
        type: 'list',
        name: 'Employee Role',
        choices: ['Sales Person', 'CSR', 'HR specialist', 'Software Engineer', "Software Tester", 'Cyber Security Specialist']
    },
    ]),
}   

function addEmployee(){
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

function viewDepartments(){
    
}

function viewRoles(){

}

function viewEmployees(){

}

function editRole(){

}

module.exports = connection