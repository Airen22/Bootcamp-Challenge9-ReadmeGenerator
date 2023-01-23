const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var markdown =  `# ${data.title}\n
  ${data.description}\n
  # Installation\n
  ${data.installation}\n
  # Usage\n
  ${data.usage}\n
  # License\n
  ${data.license}\n
  # Contributers\n
  ${data.contributers}\n
  # Tests\n
  ${data.tests}\n
  # Contact\n
  Github:${data.gitgub}\n
  Email: ${data.email}`
fs.appendFile('READMEexample.md', markdown, (err) =>
err ? console.error(err) : console.log('Success!'))}
  

module.exports = generateMarkdown;
