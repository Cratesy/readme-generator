//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "list",
    message: "what license?",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "Add a brief product description?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install it?",
    name: "installation",
  },
  {
    type: "input",
    message: "usage of the app?",
    name: "usage",
  },
  {
    type: "input",
    message: "How to collaborate?",
    name: "collaboration",
  },
  {
    type: "input",
    message: "Was there any tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "Whats your github URL?",
    name: "githubUrl",
  },
  {
    type: "input",
    message: "Whats your email address?",
    name: "emailAddress",
  },
];

//write README file
const writeToFile = (data) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("readme done!");
    }
  };
  // change fileName to suit
  fs.writeFile("Generated_README.md", data, callback);
};

//initialize app
const init = async () => {
  const answers = await inquirer.prompt(questions);

  const generatedReadMeFile = generateMarkdown(answers);
  writeToFile(generatedReadMeFile);
};

// Function call to initialize app
init();
