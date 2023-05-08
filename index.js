const express = require('express')();

const app = express;

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello World' });
	// res.end('Hello World');
});

app.get('/hello', (req, res) => {
	res.end('Hello from the hello route');
});

module.exports = app;
