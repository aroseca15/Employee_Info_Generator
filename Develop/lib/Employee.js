// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, email, id, hireDate) {
        this.name = name,
            this.role = role,
            this.email = email,
            this.id = id,
            this.hireDate = hireDate
    }

    // getEmployeeInfo = () => {
    //     return [this.name,
    //     this.role,
    //     this.email,
    //     this.id,
    //     this.hireDate];
    // }

    getName = () => {
        return this.name;
    }

    getRole = () => {
        return this.role;
    }

    getEmail = () => {
        return this.email;
    }

    getId = () => {
        return this.id;
    }

    getHireDate = () => {
        return this.hireDate;
    }

}

module.exports = Employee;