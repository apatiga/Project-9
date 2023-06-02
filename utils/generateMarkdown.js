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
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  * [Descriptions](#description)
  * [Installation](#installation)
  * [Usage](#Usage)
  * [Contact-Me](#contact-me)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Contect-Me](#contact-me)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Contact-Me
* Name - ${data.name}
* Email - ${data.email}
* GitHub - [${data.creator}](Https://github.com/${data.creator}/)
## Test
${data.test}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
