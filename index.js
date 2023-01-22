// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const utils = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [    
    {
    type: 'input',
    message: 'What is the tile?',
    name: 'title',
    },
    // {
    // type: 'input',
    // message: 'What is the description?',
    // name: 'description',
    // },
    // {
    // type: 'input',
    // message: 'Please add installation instructions (enter N/A if not applicable):',
    // name: 'installation',
    // },
    // {
    // type: 'input',
    // message: 'What is the usage?',
    // name: 'usage',
    // },
    {
    type: 'list',
    message: 'Please select license used:',
    name: 'license',
    choices: [ 'None',
    'Apache License 2.0',
    'Boost Software License 1.0',
    'BSD 2-Clause "Simplified" License',
    'BSD 3-Clause "New" or "Revised" License',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU General Public License v3.0',
    'GNU Lesser General Public License v2.1',
    'MIT License',
    'Mozilla Public License 2.0',
    'The Unlicense',
    'Other',
    ]
    },
    // {
    // type: 'input',
    // message: 'Please add contributers:',
    // name: 'contributers',
    // },
    // {
    // type: 'input',
    // message: 'Please add test:',
    // name: 'tests',
    // },
    // {
    // type: 'input',
    // message: 'Please add your GitHub profile:',
    // name: 'github',
    // },
    // {
    // type: 'input',
    // message: 'Please add your email:',
    // name: 'email',
    // }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('READMEexample.md', generatemarkdown(),null,), (err) =>
// err ? console.error(err) : console.log('README created!')
// }
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
    })
    

    // .then((response) => {
    //     fs.appendFile('log.txt', JSON.stringify(response,null,),(err) =>
    //     err ? console.error(err) : console.log('Entry logged!'))
    //     writeToFile()
    // })
}

// Function call to initialize app
init();
