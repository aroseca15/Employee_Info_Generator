const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { type } = require("os");

const newEmployee = [];




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const app = function app() {
    // function generalQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new employee?',
            name: 'name'
        },

        {
            type: 'confirm',
            message: 'Is your new employee a Manager?',
            name: 'manager',
            when: function (answers) {
                answers.manager === true
                return answers.officeNum;
            }
        },

        {
            type: 'confirm',
            message: 'Is your new employee an Intern?',
            name: 'intern',
            default: {
                type: "input",
                message: "What school:",
                name: 'school'
            },
            when: function (answers) {
                answers.intern === true
                return answers.school;
            }
        },

        {
            type: 'confirm',
            message: 'Is your new employee a Engineer?',
            name: 'engineer',
            when: function (answers) {
                answers.engineer === true
                return answers.userName;
            }
        },

        // {
        //     type: 'input',
        //     message: 'Please enter the School of your Intern:',
        //     name: 'school'
        // },


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
            message: 'What office number is assigned to your Manager?',
            name: 'officeNum'
        },

        {
            type: 'input',
            message: 'Please enter Engineer Github username',
            name: 'userName'
        },

        
        {
            type: 'confirm',
            message: 'Would you like to add a new Employee?',
            name: 'confirm'

        },


    ]).then(res => {
        function confirm() {
            const confirm = res.confirm;
            if (confirm == true) {
                addNewEmployee();
            } else if (confirm == false) {
                console.log("Finished!");
                renderHTML();
            }
        };
        confirm();
    })
}
function getManager() {
        const manager = new Manager(res.name, res.role, res.id, res.email, res.officeNum);
        newEmployee.push(manager);
        addNewEmployee();
};

function getEngineer() {
    const engineer = new Engineer(res.name, res.role, res.id, res.email, res.github);
    newEmployee.push(engineer);
    addNewEmployee();
};

function getIntern() {
        const intern = new Intern(res.name, res.role, res.email, res.id, res.school);
        newEmployee.push(intern);
        addNewEmployee();
};

function addNewEmployee() {
    // generalQuestions();
    const role = res.role;
    if (role == "intern") {
        getIntern();
    } else if (role == "manager") {
        getManager();
    } else if (role == "engineer") {
        getEngineer();
    }
};

// };
function renderHTML() {
    fs.writeFileSync(outputPath, render(newEmployee), "utf-8")
}


app();













// when: function(answer){
//     if(answer === 'intern'){
//         inquirer.prompt([
//             {
//                     type: 'input',
//                     message: 'What school is your Intern from?',
//                     name: 'school'

//                 },
//             ]);
//         }else if(answer === 'manager'){
//                     inquirer.prompt([
//                         {
//                             type: 'input',
//                             message: 'What office number is assigned to your Manager?',
//                             name: 'officeNumber'
//                         },

//                     ])
//                 } 
//                 else if(answer === 'engineer'){
//                     inquirer.prompt([
//                         {
//                             type: 'input',
//                             message: 'Please enter Engineer Github username',
//                             name: 'userName'
//                         },

//                     ])
//                 }
//             }



// const server = http.createServer((req, res) => {
//     console.log("I'm here and Listening.");
//     });


//     server.listen(3010);

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
// for the provided `render` function to work!
