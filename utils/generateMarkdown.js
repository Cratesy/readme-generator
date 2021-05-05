// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  // <img
  //   alt="AUR license badge"
  //   src="https://img.shields.io/badge/license-Apache-blue"
  // ></img>;
  // <img
  //   alt="APM badge"
  //   src="https://img.shields.io/badge/license-MIT-green"
  // ></img>;
  // <img
  //   alt="PyPI - License badge"
  //   src="https://img.shields.io/badge/license-BSD-green"
  // ></img>;
  // <img
  //   alt="Eclipse Marketplace badge"
  //   src="https://img.shields.io/badge/license-GPL-blue"
  // ></img>;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  // https://img.shields.io/badge/license-${license}-<COLOR>
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

//Function to generate markdown for README
const generateMarkdown = (answers) => {
  const {
    title,
    license,
    description,
    installation,
    usage,
    collaboration,
    tests,
    githubUrl,
    emailAddress,
  } = answers;
  return `# ${title}

  ![mit license](https://img.shields.io/badge/license-MIT-green)

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [${title}](#${title})
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  ${installation}
  
  ## Usage
  
 ${usage}
  
  ## License
  
  ${license}
  
  ## Contributing

  ${collaboration}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  - View my [GitHub](${githubUrl})
  - Email me at ${emailAddress}
`;
};

module.exports = generateMarkdown;
