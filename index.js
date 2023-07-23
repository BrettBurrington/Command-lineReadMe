const fs = require('fs');
const inquirer = require('inquirer');


function promptUser() {
  return inquirer.prompt([
    
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your amazing project:',
    },
   

  ]);
}

