// Require
const express = require('express')
const controller = require('..//controllers/person-controller')
const routes = express.Router();

// Routes
routes.get('/all', controller.getAllPersons)
routes.get('/get/:id', controller.getPersonByID)
routes.post('/add', controller.addPerson)
routes.delete('/delete/:id', controller.deletePerson)

module.exports = routes