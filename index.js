const express = require('express')();
const cors = require('cors');

const app = express;

app.use(cors());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello World' });
	// res.end('Hello World');
});

app.get('/hello', (req, res) => {
	res.end('Hello from the hello route');
});

module.exports = app;
