const inquirer = require('inquirer');
const fs = require('fs');
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide any tests written for your application and examples on how to run them.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    }
  ];

  function generateReadme(answers) {
    return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
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
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  ${answers.contribution}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).
    `;
  }
  
  
// Prompt the user with questions
inquirer.prompt(questions).then((answers) => {
    // Generate README content using user's answers
    const readmeContent = generateReadme(answers);
    
    // Write the generated README content to a file
    writeToFile('README.md', readmeContent);
  });