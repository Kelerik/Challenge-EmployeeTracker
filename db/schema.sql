DROP TABLE IF EXISTS employee;

DROP TABLE IF EXISTS role;

DROP TABLE IF EXISTS department;

CREATE TABLE department (
   id integer AUTO_INCREMENT PRIMARY KEY,
   name varchar(30) NOT NULL
);

CREATE TABLE role (
   id integer AUTO_INCREMENT PRIMARY KEY,
   title varchar(30) NOT NULL,
   salary decimal(10, 2),
   department_id integer,
   FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE
   SET
      NULL
);

CREATE TABLE employee (
   id integer AUTO_INCREMENT PRIMARY KEY,
   first_name varchar(30) NOT NULL,
   last_name varchar(30) NOT NULL,
   role_id integer,
   manager_id integer,
   FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE
   SET
      NULL,
      FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE
   SET
      NULL
);