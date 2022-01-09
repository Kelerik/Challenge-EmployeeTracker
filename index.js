const inquirer = require("inquirer");

const promptMenu = () => {
   return inquirer.prompt([
      {
         type: "list",
         name: "option",
         message: "Select one of the following options:",
         choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
         ],
      },
   ]);
};

promptMenu().then((answer) => {
   console.log(answer.option);
});
