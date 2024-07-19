
const inquirer = require('inquirer');
const { Pool } = require('pg');


// Connect to database
const pool = new Pool(
    {

      user: 'postgres',
      password: 'keygen41',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  )




inquirer 
    .prompt([
        {
        type : 'list',
        name: 'choice',
        message: 'Which Directory Would You Like To Go To?',
        choices: ["View Departments", "View Roles", "View Employees", "Add Department", "Add Role", "Update Employee Role"]
         }
    ])
    .then((response) => {
        if(response.choice == "View Departments"){
            pool.query('SELECT * FROM departments', function (err, {rows}) {
                console.log(rows);
                console.log('Departments Shown!')
              });
              
        }
        else if(response.choice == "View Roles"){
            pool.query('SELECT * FROM roles', function (err, {rows}) {
                console.log(rows);
                console.log('Roles Shown!')
            });
        }
        else if(response.choice == "View Employees"){
            pool.query('SELECT * FROM employee', function (err, {rows}) {
                console.log(rows);
                console.log('Employees Shown!')
            });
        }
        else if(response.choice == "Add Department"){}
        else if(response.choice == "Add Role"){}
        else if(response.choice == "Update Employee Role"){}

        else{ console.log('im not good')}
    });
        

 