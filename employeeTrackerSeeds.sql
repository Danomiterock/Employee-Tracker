DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  department_id INT UNSIGNED AUTO_INCREMENT,
  department_name VARCHAR(30) UNIQUE NOT NULL,
  PRIMARY KEY (department_id)
);

CREATE TABLE role (
  role_id INT UNSIGNED AUTO_INCREMENT,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(department_id) ON DELETE CASCADE,
  PRIMARY KEY (role_id)
);

CREATE TABLE employee (
  employee_id INT UNSIGNED AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  INDEX role_ind (role_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(role_id) ON DELETE CASCADE,
  manager_id INT UNSIGNED,
  INDEX man_ind (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(employee_id) ON DELETE SET NULL,
  PRIMARY KEY (employee_id)
);


INSERT INTO department (department_name)
VALUES ("Administration"), ("Software Development"), ("Quality Control");

INSERT INTO role (title, salary, department_id)
    VALUES ("Manager", 120000, 1), ("Human Resources Specialist", 50000, 1), ("Marketing Director", 80000, 1), ("Lead Software Developer", 100000, 2), ("Senior Software Developer", 85000, 2), ("Junior Software Developer", 45000, 2), ("Lead Tester", 95000, 3), ("Senior Tester", 75000, 3), ("Junior Tester", 40000, 3);

INSERT INTO employee (last_name, first_name, role_id, manager_id)
    VALUES ("Gomez", "Sergio", 1, null), ("Troung", "Danh", 1, null), ("Biernat", "Kate", 1, null), ("Chabert", "Lacey", 2, null), ("Elf", "Buddy", 3, null), ("Supernerd", "Nathan", 4, null), ("Dushku", "Eliza", 5, null), ("Reynolds", "Ryan", 5, null), ("McCallister", "Kevin", 6, null), ("Brown", "Charles", 6, null), ("Connery", "Sean", 7, null), ("Johanson", "Scarlet", 8, null), ("Jovovich", "Milla", 8, null), ("Reeves", "Keanu", 9, null), ("McGregor", "Ewan", 9, null);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee; 

SELECT employee.id, last_name, first_name, title, department_name, department_manager, salary
FROM employees JOIN role ON employees.role_id = role.id
JOIN department ON role.department_id= department.id;
