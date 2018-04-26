const Person = require('..//domain/Person')

let persons = [
    new Person('Inge', 'van Zetten'),
    new Person('Marco', 'van Poortvliet'),
    new Person('Fer', 'Schmidt')
]

module.exports = {

    getAllPersons(request, response) {
        response.status(200).json(persons).end()
    },

    getPersonByID(request, response) {
        const id = request.params.id
        if (id >= 0 & id < persons.length) {
            response.status(200).json(persons[id]).end()
        } else {
            var msg = {
                msg: 'Person index out of bounds',
                code: 500,
                method: request.method,
                url: request.baseUrl
            }
            next(msg)
        }
    },

    addPerson(request, response) {
        var firstname = request.body.firstname
        var lastname = request.body.lastname

        persons.push(new Person(firstname, lastname))

        response.status(200).end()
    },

    deletePerson(request, response) {
        const id = request.params.id

        persons.splice(id, 1)
        response.status(200).end();

        // if(id >= 0 && id <= persons.length) {
        //     persons.splice(id, 1)
        //     response.status(200).end()
        // } else {
        //     response.status(500).end()
        // }

    }

}