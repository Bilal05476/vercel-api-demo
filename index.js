const app = require('express')();

app.get('/api', (req, res) => {
	res.end({ message: 'Hello from server!' });
});

module.exports = app;
