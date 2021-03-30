const util = require("util");
const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3750,
  user: "root",
  password: "",
  database: "employee_trackerDB",
});

connection.connect();

connection.query = util.promisify(connection.query);

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userOptions",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "Add department",
          "View all roles",
          "View all employees",
          "Add employee",
          "Edit employee role",
          "Exit",
        ],
      },
    ])
    .then(function (response) {
      switch (response.userOptions) {
        case "View all departments":
          viewDepartments();
          break;
        case "Add department":
          addDepartment();
          break;
        case "view all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployee();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "Edit employee role":
          editRole();
          break;
        case "Exit":
        default:
          connection.end();
      }
    });
}

function addRole() {
  inquirer.prompt([
    {
      type: "list",
      name: "Employee Role",
      choices: [
        "Manager",
        "Human Resources Specialist",
        "Marketing Director",
        "Lead Software Developer",
        "Senior Software Developer",
        "Junior Software Developer",
      ],
    },
  ]);
}

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "Employee Last Name",
      message: "Please input the employee's first name.",
    },
    {
      type: "input",
      name: "Employee First Name",
      message: "Please input the employee's last name.",
    },
    {
      name: "Employee Role",
      choices: [
        "Manager",
        "Human Resources Specialist",
        "Marketing Director",
        "Lead Software Developer",
        "Senior Software Developer",
        "Junior Software Developer",
      ],
    },
  ]);
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
    if (err) throw err;
    console.table(data);
    init();
  });
}

// function addDepartment() {

// }

function viewRoles() {
  connection.query("SELECT * FROM role", function (err, data) {
    if (err) throw err;
    console.table(data);
    init();
  });
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, data) {
    if (err) throw err;
    console.table(data);
    init();
  });
}

// function editRole(){

// }
