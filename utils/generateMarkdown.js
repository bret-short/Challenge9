// generateReadme function populating the README.md
function generateReadme(answers) {
  return `
<h1 align="center">${answers.projectTitle}</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightblue)
<br />
This application is covered by the ${answers.license} license. 
## Contributors
${answers.contributing}
## Testing
${answers.tests}
## Questions
For any further questions you can contact me on:<br />
  -GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
  -Email: ${answers.email}<br /><br />
  `;
}

module.exports = generateReadme;