const http = require('http');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const Person = require('./domain/Person');
const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());

let persons = [
	new Person('Inge', 'van Zetten'),
	new Person('Marco', 'van Poortvliet')
];

// Pre-processor
app.use('*', (request, response, next) => {
	next();
})

// Get All Persons
app.get('/api/all', (request, response) => {
	response.status(200).json(persons).end();
});

// Get Person by index
app.get('/api/person/:id', (request, response) => {
	const id = request.params.id;
	app.get('/api/person/:id', (request, response) => {
		const id = request.params.id;

		if (id >= 0 & id < persons.length) {
			response.status(200).json(persons[id]).end();
		} else {

			var msg = {
				msg: 'Person index out of bounds',
				code: 500,
				method: request.method,
				url: request.baseUrl
			}

			next(msg);
		}
	});
});

// Add Person
app.post('/api/add', (request, response) => {

	var firstname = request.body.firstname;
	var lastname = request.body.lastname;

	persons.push(new Person(firstname, lastname));

	response.status(200).end();
});

// Not found handler
app.use('*', (request, response, next) => {

	var error = {
		msg: 'Endpoint does not exists',
		code: 404,
		method: request.method,
		url: request.baseUrl
	}

	response.status(404).json(error).end();
});

// Error handler
app.use('*', (error, request, response, next) => {
	response.status(500).json(error).end();
});

// Listener
var server = app.listen(process.env.PORT || 3000, () => {
	console.log('Listening...');
});