const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

// connect to database
const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "J6ordbtRZNaMZvu8Ap2M",
   database: "challenge_employeetracker",
});

// inquirer output interface
const ui = new inquirer.ui.BottomBar();

// update bottom bar
const updateBottomBar = (content) => {
   ui.log.write("\n" + cTable.getTable(content));
};

// main menu prompt
const promptMenu = () => {
   inquirer
      .prompt([
         {
            type: "list",
            name: "option",
            message: "Select one of the following options:",
            pageSize: 8,
            choices: [
               "View all departments",
               "View all roles",
               "View all employees",
               "Add a department",
               "Add a role",
               "Add an employee",
               "Update an employee role",
               "Exit",
            ],
         },
      ])
      .then((answer) => {
         console.log("");
         switch (answer.option) {
            case "View all departments":
               viewDepartments();
               break;
            case "View all roles":
               viewRoles();
               break;
            case "View all employees":
               viewEmployees();
               break;
            case "Add a department":
               break;
            case "Add a role":
               break;
            case "Add an employee":
               break;
            case "Update an employee role":
               break;
         }
         if (answer.option === "Exit") {
            db.end();
         } else {
            promptMenu();
         }
      });
};

// display departments
const viewDepartments = () => {
   const sql = `
   SELECT
      department.id AS ID,
      department.name AS "Department Name"
   FROM
      department`;
   db.query(sql, (err, rows) => {
      if (err) {
         console.log({ error: err.message });
      } else {
         updateBottomBar(rows);
      }
   });
};

// display roles
const viewRoles = () => {
   const sql = `
   SELECT
      role.id AS ID,
      role.title AS "Role Title",
      role.salary AS Salary,
      department.name AS Department
   FROM
      role
      LEFT JOIN department ON role.department_id = department.id`;
   db.query(sql, (err, rows) => {
      if (err) {
         console.log({ error: err.message });
      } else {
         updateBottomBar(rows);
      }
   });
};

// display employees
const viewEmployees = () => {
   const sql = `
   SELECT
      a.id AS ID,
      a.first_name AS "First Name",
      a.last_name AS "Last Name",
      role.title AS Role,
      department.name AS Department,
      role.salary AS Salary,
      -- replace with string if null
      coalesce(b.first_name, '-') AS Manager
   FROM
      employee a
      LEFT JOIN employee b ON a.manager_id = b.id
      LEFT JOIN role ON a.role_id = role.id
      LEFT JOIN department ON role.department_id = department.id`;
   db.query(sql, (err, rows) => {
      if (err) {
         console.log({ error: err.message });
      } else {
         updateBottomBar(rows);
      }
   });
};

// execute
promptMenu();
