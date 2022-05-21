// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const createMarkdown = require('./utils/generateMarkdown.js');

console.log("Welcome. Please answer a series of questions to help construct your README with its respective contents.")



// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
{
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle"
},{
    type: "input",
    message: "Write a short description about your project.",
    name: "description"
},{
    type: "input",
    message: "Describe any installation parameters (if any).",
    name: "installation"
},{
    type: "input",
    message: "What is your project being used for?",
    name: "usage"
},{
    type: "input",
    message: "Who helped contribute to your project?",
    name: "contributors"
},{
    type: "input",
    message: "Are there any test parameters?",
    name: "tests"
},{
    type: "list",
    message: "Please select the designated license for this project.",
    choices: [
        "Apache",
        "Boost",
        "Eclipse",
        "GPLv2",
        "ISC",
        "Mozilla-Public",
        "MIT",
        "Other"
    ],
    name: "license"
},{
    type: "input",
    message: "Please input your Github username (for user accessibility).",
    name: "github"
},{
    type: "input",
    message: "Enter your email address (for user availability).",
    name: "email"
}
]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err){
            return console.log(err)
        }
    
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => 
            fs.writeFileSync('./output/README.md', createMarkdown(answers)))
        .then(() => console.log("Succesfully created README file. Please see the completed file under the /output file folder."))
    
};

// Function call to initialize app
init();
