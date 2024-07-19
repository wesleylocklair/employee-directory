DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
\c employee_db; 
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE roles (
id SERIAL PRIMARY KEY,
title VARCHAR(100),
SALARY DECIMAL,
department INTEGER,
FOREIGN KEY (department)
REFERENCES departments(id)
ON DELETE SET NULL
);

CREATE TABLE employee (
id SERIAL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INTEGER,
FOREIGN KEY (manager_id)
REFERENCES employee(id)
ON DELETE SET NULL
);

