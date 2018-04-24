let http = require('http');
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000, function listening() {
	console.log('Listening...');
});

app.get('/', function (request, response) {
	response.send('Hello World');
})

const port = process.env.PORT || 3000;