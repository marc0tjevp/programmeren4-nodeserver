class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFirstname() {
        return this.firstname;
    }

    getLastName() {
        return this.lastname;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
    }

    setLastname(lastname) {
        this.lastname = lastname;
    }
}

module.exports = Person;