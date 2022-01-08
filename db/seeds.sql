INSERT INTO
   department(name)
VALUES
   ("Sales"),
   ("Engineering"),
   ("Finance"),
   ("Legal");

INSERT INTO
   role(title, salary, department_id)
VALUES
   ("Sales Lead", 60000, 1),
   ("Salesperson", 50000, 1),
   ("Engineer Lead", 60000, 2),
   ("Senior Engineer", 50000, 2),
   ("Junior Engineer", 40000, 2),
   ("Finance Lead", 60000, 3),
   ("Accountant", 50000, 3),
   ("Bookkeeper", 40000, 3),
   ("Legal Lead", 60000, 4),
   ("Lawyer", 50000, 4);

INSERT INTO
   employee(
      first_name,
      last_name,
      role_id,
      manager_id
   )
VALUES
   ("Sydney", "Frost", 1, NULL),
   ("Gideon", "Fitzpatrick", 2, 1),
   ("Tobias", "Blackwell", 3, NULL),
   ("Saskia", "Bowes", 4, 3),
   ("Krista", "Woolley", 5, 3),
   ("Gabija", "Burrows", 6, NULL),
   ("Anderson", "Greenwood", 7, 6),
   ("Amy", "Daly", 8, 6),
   ("Merryn", "Hastings", 9, NULL),
   ("Kirk", "Petty", 10, 9);