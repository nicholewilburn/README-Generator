// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?','What is the Description?','What is your Installation Instructions?','What is the Usage Information?','What are the Contribution Guidelines?','What are the Test Instructions?','What is the License?','What is your Github Username?','What is your email address?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("File written successfully");
    });

}

// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt([
      {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installIns',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage',
    },
    {
      type: 'input',
      message: questions[4],
      name: 'contribution',
    },
    {
      type: 'input',
      message: questions[5],
      name: 'testIns',
    },
    {
        type: 'list',
        name: 'license',
        message: questions[6],
        choices: ['Apache 2.0', 'GNU Public 3.0', 'MIT', 'BSD 2', 'BSD 3', 'Boost 1.0','CC0 1.0','Eclipse 2.0','GNU Affero 3.0','GNU Public 2.0','GNU Lesser 2.1','Mozilla 2.0','Unlicense'],
    },
    {
        type: 'input',
        message: questions[7],
        name: 'username',
      },
      {
        type: 'input',
        message: questions[8],
        name: 'email',
      }
    ])
    .then((data) => {
      console.log(data);
  
      const { title, description, installIns, usage, contribution, testIns, license, username, email } = data;

      var readmeContent = `#${title}

      ##Description
      ${description}

      ##Installation Instructions
      ${installIns}

      ##Usage Instructions
      ${usage}

      ##Contribution Guidelines
      ${contribution}
      
      ##Testing Instructions
      ${testIns}
      
      ##License
      ${license}
      
      ##Questions
      How can I be reached?
      My Github: https://github.com/${username}
      My Email: ${email}`
    ;
      
      writeToFile('generatedREADME.md', readmeContent);

    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
          console.log("Something else went wrong");
      }
    });

}

// Function call to initialize app
init();