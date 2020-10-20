const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const newEmployee = [];
const manager = new Manager(res.name, res.role, res.email, res.id, res.officeNumber);
const intern = new Intern(res.name, res.role, res.email, res.id, res.school);
const engineer = new Engineer(res.name, res.role, res.email, res.id, res.github);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
app = ()=> {
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of the new employee?',
        name: 'name'
    },

    {
        type: 'input',
        message: 'Please enter their role in your company:',
        name: 'role'

    },

    {
        type: 'input',
        message: 'Please enter the email of new employee:',
        name: 'email'

    },
    
    {
        type: 'input',
        message: 'Please enter new employee ID:',
        name: 'id'

    },

    {
        type: 'input',
        message: 'Please enter Engineer Github username',
        name: 'userName'

    },

    // {
    //     type: 'input',
    //     message: 'What school is your Intern from?',
    //     name: 'school'

    // },

    {
        type: 'input',
        message: 'Who worked on this project with you?',
        name: 'creators'

    },

    {
        type: 'input',
        message: 'What office number is assigned to your Manager?',
        name: 'officeNumber'
    },

    // {
    //     type: 'input',
    //     message: 'Please enter your email address:',
    //     name: 'email'

    // },

    // {
    //     type: 'input',
    //     message: 'Please complete the sentence and enter new information if needed; Best contacted via:',
    //     name: 'contact'

    // },

]).then(function(res) {
if (intern === true){
    {
        type: 'input',
        message: 'What school is your Intern from?',
        name: 'school'

    },

}
});




}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
