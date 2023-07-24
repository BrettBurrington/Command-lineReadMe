const fs = require('fs');
const inquirer = require('inquirer');


function promptUser() {
  return inquirer.prompt([
    
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide instruction for how to install',
    },
     {
      type: 'input',
      name: 'usage',
      message: 'Provide dome of the usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide some guidelines for contibution to the project:',
    },
     {
      type: 'input',
      name: 'tests',
      message: 'State the test instructions:',
    },
     {
      type: 'list',
      name: 'license',
      message: 'Select a license that applies:',
      choices: ['MIT', 'Apache', 'GNU', 'None'],
    },
   {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Provide an email address for inquiries:',
    },
  ]);

 
}

