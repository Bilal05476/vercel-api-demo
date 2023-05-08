const app = require('express')();

app.get('/', (req, res) => {
	res.end('Hello World');
});

module.exports = app;
