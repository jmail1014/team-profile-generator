const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const createPage = require('./assets/created-page');

const team = [];

const promptUser = () => {
  console.log('Create your team:')
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
        validate: answer => {
          if (answer === "") {
          console.log('Please enter the manager name.')
          return false;
        }
        return true;
       }
      },
      {
        type: 'number',
        name: 'managerId',
        message: "Enter the manager's ID:",
        validate: answer => {
          if (answer <= 0) {
            console.log('Enter a valid id.')
            return false;
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?"
      },
      {
        type: 'number',
        name: 'officeNumber',
        message: "Enter the manager's office number",
        validate: answer => {
          if (answer <= 0) {
            console.log('Enter a valid office number')
            return false;
          }
          return true;
        }
      },
    //   {
    //     type: 'list',
    //     name: 'teamMember',
    //     message: 'Would you like to add a team member?',
    //     choices: ['Engineer', 'Intern', 'Finish']
    //   },
    //   {
    //     type: 'input',
    //     name: 'email',
    //     message: 'What is the employee email?'
    //   },
    //   {
    //     type: 'input',
    //     name: 'id',
    //     message: 'What is the employee id?'
    //   }
    ]);
  };

  // promptUser().then(answers => {
  //     if (answers.role === 'Engineer') {
  //         var userGithub;
  //       var github = () => { 
  //       return inquirer.prompt([
  //           {
  //               type: 'input',
  //               name: 'github',
  //               message: 'What is the employee github name?'
  //           }
  //         ])
  //       }
  //       github().then(answers => {
  //           console.log(answers.github);
  //           userGithub = answers.github;
  //       })
  //       //Engineer(answers.name, answers.id, answers.email, userGithub)
  //   }
  // })