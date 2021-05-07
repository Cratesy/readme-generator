//returns a license badge based on which license is passed in
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

// link for license
const getLicenseLink = (license) => {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
      break;
    case "APACHE_2.0":
      return "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL_3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "BSD_3":
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "None":
      return "";
      break;
    default:
      return "";
      break;
  }
};

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
  
  ${license} ${getLicenseLink(license)}
  
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
