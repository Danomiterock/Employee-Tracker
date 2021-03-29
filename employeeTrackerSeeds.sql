DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
)

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    department_name VARCHAR(30),
    department_manager VARCHAR(30),
    PRIMARY KEY (id),
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
)

INSERT INTO department (department_name, department_manager)
VALUES ("Administration", "Matt Johnson"), ("Software Development", "Danh Troung"), ("Quality Control", "John Lucas")

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 120000, 1), ("Human Resources Specialist", 50000, 1), ("Marketing Director", 80000, 1), ("Lead Software Developer", 100000, 2); ("Senior Software Developer", 85000, 2), ("Junior Software Developer", 45000, 2), ("Lead Tester", 95000, 3), ("Senior Tester", 75000, 3), ("Junior Tester", 40000, 3)

INSERT INTO employee (last_name, first_name, roles.title)
VALUES ("Chabert", "Lacey", "Human Resources Specialist"), ("Elf", "Buddy", "Marketing Director"), ("Supernerd", "Nathan", "Lead Software Developer"), ("Dushku", "Eliza", "Senior Software Developer"), ("Reynolds", "Ryan", "Senior Software Developer"), ("McCallister", "Kevin", "Junior Software Developer"), ("Brown", "Charles", "Junior Software Developer"), ("Connery", "Sean", "Lead Tester"), ("Johanson", "Scarlet", "Senior Tester"), ("Jovovich", "Milla", "Senior Tester"), ("Reeves", "Keanu", "Junior Tester"), ("McGregor", "Ewan", "Junior Tester")

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

SELECT employee.id, last_name, first_name, title, department_name, department_manager, salary
FROM employees JOIN roles ON employees.role_id = roles.id
JOIN department ON roles.department_id= department.id;



