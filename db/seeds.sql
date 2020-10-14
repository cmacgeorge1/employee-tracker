USE employee_db;

INSERT INTO department (name) VALUES ("Corporate");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Marketing");

INSERT INTO role (title, salary, department_id) VALUES ("Director", 150, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Counsel", 120, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Software Engineer", 140, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Marketing Specialist", 110, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Senior Director", 200, 3);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Edward", "Liang", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Chris", "Wallace", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Eric", "Smith", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jessica", "Johnson", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Travis", "Kim", 5);