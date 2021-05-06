// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "MIT") {
    return "![MIT license](https://img.shields.io/badge/license-MIT-green)";
  }
  if (license === "APACHE_2.0") {
    return "![APACHE license](https://img.shields.io/badge/license-Apache-blue)";
  }
  if (license === "BSD_3") {
    return "![BSD license](https://img.shields.io/badge/license-BSD-green)";
  }
  if (license === "GPL_3.0") {
    return "![GPL license](https://img.shields.io/badge/license-GPL-blue)";
  }
  if (license === "none") {
    return "no license";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

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

  ${renderLicenseBadge(license)}

  ## Table of Contents
  
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  
  ${description}
  
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
