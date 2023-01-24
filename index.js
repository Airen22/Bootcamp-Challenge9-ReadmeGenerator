// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const utils = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

const confirmInput = (input, confirm) => {
    if (input == "") {
        return `Did you mean to leave this blank? Please enter N/A if there is no content for this section.`
    } return true
}

// TODO: Create an array of questions for user input
const questions = [    
    {
    type: 'input',
    message: 'What is the tile?',
    name: 'title',
    validate: confirmInput
    },
    {
    type: 'input',
    message: 'What is the description?',
    name: 'description',
    validate: confirmInput
    },
    {
    type: 'input',
    message: 'Please add installation instructions (enter N/A if not applicable):',
    name: 'installation',
    validate: confirmInput
    },
    {
    type: 'input',
    message: 'What is the usage?',
    name: 'usage',
    validate: confirmInput
    },
    {
    type: 'list',
    message: 'Please select license used:',
    name: 'license',
    choices: [ 'None',
    'Apache License 2.0',
    'Boost Software License 1.0',
    'BSD 2-Clause Simplified License',
    'BSD 3-Clause New or Revised License',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU General Public License v3.0',
    'GNU Lesser General Public License v2.1',
    'MIT License',
    'Mozilla Public License 2.0',
    'The Unlicense'
    ]
    },
    {
    type: 'input',
    message: 'Please add contributers:',
    name: 'contributers',
    validate: confirmInput
    },
    {
    type: 'input',
    message: 'Please add test:',
    name: 'tests',
    validate: confirmInput
    },
    {
    type: 'input',
    message: 'Please add your GitHub profile:',
    name: 'github',
    validate: confirmInput
    },
    {
    type: 'input',
    message: 'Please add your email:',
    name: 'email',
    validate: confirmInput
    }
];

// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile('READMEexample.md', "", (err) =>
    err ? console.error(err) : console.log('README created!')
  );
}
// TODO: Create a function to initialize app
function init(data) {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile(response)
        generateMarkdown(response)
    })
   } 

// Function call to initialize app
init();
