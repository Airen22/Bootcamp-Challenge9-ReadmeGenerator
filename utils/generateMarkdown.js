const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (`${data.license}` === "None") {
    return("")
  } else {var uriComponent = `${data.license}`.replace(/ /g, "_");
  return (`<img src="https://img.shields.io/badge/License-${uriComponent}-blue.svg">\n`)
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (`${data.license}` === "None") {
  return("")
} else {return (`* [License](#License)\n`)
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (`${data.license}` === "None") {
    return("")
} else {return (`## License\n
  ${data.license}\n`)
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var markdown =  `# ${data.title}\n
  ${data.description}\n

  ${renderLicenseBadge(data)}\n

## Table of Contents\n
* [Installation](#Installation)\n
* [Usage](#Usage)\n
* [Contributers](#Contributers)\n
* [Tests](#Tests)\n
* [Contact](#Contact)\n
${renderLicenseLink(data)}\n

## Installation\n
  ${data.installation}\n

## Usage\n
  ${data.usage}\n

## Contributers\n
  ${data.contributers}\n

## Tests\n
  ${data.tests}\n

## Contact\n
  Github:${data.github}\n
  Email: ${data.email}\n
  
${renderLicenseSection(data)}`

  fs.writeFile('READMEexample.md', markdown, (err) =>
  err ? console.error(err) : console.log('Success!'))
  

}
  

module.exports = generateMarkdown;
