// Require
const http = require('http')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const Person = require('./domain/Person')
const person_routes = require('./routes/person-routes')

// Variables
const port = process.env.PORT || 3000
const app = express()

// Uses
app.use(morgan('dev'))
app.use(bodyparser.json())

// Routes
app.use('/api', person_routes);

// Pre-processor
app.use('*', (request, response, next) => {
	next()
})

// Not found handler
app.use('*', (request, response, next) => {

	var error = {
		msg: 'Endpoint does not exists',
		code: 404,
		method: request.method,
		url: request.baseUrl
	}

	response.status(404).json(error).end()
})

// Error handler
app.use('*', (error, request, response, next) => {
	response.status(500).json(error).end()
})

// Listener
var server = app.listen(process.env.PORT || 3000, () => {
	console.log('Listening...')
})