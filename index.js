// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdwon")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Plese name your project",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project.",
    },
    {
        type: "checkbox",
        name: "license",
        messgae: "Please select a liscense applicable to the project",
        choices: "something",
    },

    {
        type: "input",
        name: "installation",
        message: "list any projecr dependencies here"
    },
    {
        type: "input",
        name: "usage",
        message: "state languages and technologies used in the project",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
        default: " ",
    },
    {
        type: "input",
        name: "name",
        message: "State full name",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address",
    },
    {
        type: "input",
        name: "test",
        message: "provide a walkthrough of project if applicabale",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd().fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then(responses)(
        console.log("Creating Professional README.md File..."),
        writeToFile("./file/README.md" , generateMarkdown({ ...responses }))
    );
}

// Function call to initialize app
init();
