// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, email, id) {
        this.name = name,
        // this.role = role,
        this.email = email,
        this.id = id
    };


    getName = () => {
        return this.name;
    }

    getRole = () => {
        return "Employee";
    }

    getEmail = () => {
        return this.email;
    }

    getId = () => {
        return this.id;
    }

    // Originally had this, but deleted all accept this. I would like to add this later.
    // getHireDate = () => {
    //     return this.hireDate;
    // }

}

module.exports = Employee;