const app = require('express')();

app.get('/', (req, res) => {
	res.end('Hello World');
});

app.get('/hello', (req, res) => {
	res.end('Hello from the hello route');
});

module.exports = app;
