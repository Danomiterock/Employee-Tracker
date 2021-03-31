const util = require("util");
const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
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
          "Add role",
          "View all employees",
          "Add employee",
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
        case "View all roles":
          viewRoles();
          break;
        case "Add role":
          addRole();
          break;
        case "View all employees":
          viewEmployee();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "Exit":
        default:
          connection.end();
      }
    });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
    if (err) throw err;
    console.table(data);
    init();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "Please input the department name.",
      },
    ])
    .then((answers) => {
      connection.query(
        "INSERT INTO department SET ?",
        answers,
        function (err, data) {
          if (err) throw err;
          console.table(data);
          viewDepartments();
          init();
        }
      );
    });
}

function viewRoles() {
  connection.query("SELECT * FROM role", function (err, data) {
    if (err) throw err;
    console.table(data);
    init();
  });
}

function addRole() {
  connection.query("SELECT * FROM department", function (err, data) {
    if (err) throw err;
    const departments = [
      ...data.map((department) => ({
        value: department.department_id,
        name: department.department_name,
      })),
    ];
    inquirer
      .prompt([
        {
          type: "list",
          name: "department_id",
          message: "Please choose the department.",
          choices: departments,
        },
        {
          type: "input",
          name: "title",
          message: "Enter the title of the new role",
        },
        {
          type: "input",
          name: "salary",
          message: "Please enter the annual salary for this role.",
        },
      ])
      .then((answers) => {
        connection.query(
          "INSERT INTO role SET ?",
          answers,
          function (err, data) {
            if (err) throw err;
            console.table(data);
            viewRoles();
            init();
          }
        );
      });
  });
}

function viewEmployee() {
  connection.query("SELECT * FROM employee", function (err, data) {
    if (err) throw err;
    console.table(data);
    init();
  });
}

function addEmployee() {
  connection.query("SELECT * FROM department", function (err, data) {
    if (err) throw err;
    const roles = [
      ...data.map((role) => ({
        value: role.role_id,
        name: role.title,
      })),
    ];
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Please input the employee's first name.",
      },
      {
        type: "input",
        name: "last_name",
        message: "Please input the employee's last name.",
      },
      {
        type: "list",
        name: "title",
        message: "Choose employee role",
        choices: roles,
      },
    ])
    .then((answers) => {
      connection.query(
        "INSERT INTO employee SET ?",
        answers,
        function (err, data) {
          if (err) throw err;
          console.table(data);
          viewEmployee();
          init();
        }
      );
    });
  });
}

init();
