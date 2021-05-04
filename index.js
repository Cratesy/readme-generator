// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = async () => {
  const answers = await inquirer.prompt(questions);

  const generatedReadMePage = generateMarkdown(answers);
  console.log(generatedReadMePage);
};

// Function call to initialize app
init();
