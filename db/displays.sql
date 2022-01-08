-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including:
-- employee ids, first names, last names, job titles, departments, salaries, and managers 
SELECT
   a.id AS ID,
   a.first_name AS "First Name",
   a.last_name AS "Last Name",
   role.title AS Role,
   department.name AS Department,
   role.salary AS Salary,
   coalesce(b.first_name, '-') AS Manager
FROM
   employee a
   LEFT JOIN employee b ON a.manager_id = b.id
   LEFT JOIN role ON a.role_id = role.id
   LEFT JOIN department ON role.department_id = department.id;