DROP DATABASE IF EXISTS employee;

CREATE DATABASE employee;

USE employee;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  INDEX dep_ind (department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  INDEX role_ind (role_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  manager_id INT UNSIGNED,
  INDEX man_ind (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE
  SET
    NULL
);


INSERT INTO department (department_name, department_manager)
VALUES ("Administration", "Matt Johnson"), ("Software Development", "Danh Troung"), ("Quality Control", "John Lucas");

INSERT INTO role (title, salary, department_id)
    VALUES ("Manager", 120000, 1), ("Human Resources Specialist", 50000, 1), ("Marketing Director", 80000, 1), ("Lead Software Developer", 100000, 2); ("Senior Software Developer", 85000, 2), ("Junior Software Developer", 45000, 2), ("Lead Tester", 95000, 3), ("Senior Tester", 75000, 3), ("Junior Tester", 40000, 3);

INSERT INTO employee (last_name, first_name, role.title)
    VALUES ("Chabert", "Lacey", "Human Resources Specialist"), ("Elf", "Buddy", "Marketing Director"), ("Supernerd", "Nathan", "Lead Software Developer"), ("Dushku", "Eliza", "Senior Software Developer"), ("Reynolds", "Ryan", "Senior Software Developer"), ("McCallister", "Kevin", "Junior Software Developer"), ("Brown", "Charles", "Junior Software Developer"), ("Connery", "Sean", "Lead Tester"), ("Johanson", "Scarlet", "Senior Tester"), ("Jovovich", "Milla", "Senior Tester"), ("Reeves", "Keanu", "Junior Tester"), ("McGregor", "Ewan", "Junior Tester");

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

SELECT employee.id, last_name, first_name, title, department_name, department_manager, salary
FROM employees JOIN role ON employees.role_id = role.id
JOIN department ON role.department_id= department.id;



