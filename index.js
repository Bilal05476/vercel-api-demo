const express = require('express')();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

require('dotenv').config();
connectDB();

const app = express;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello World' });
	// res.end('Hello World');
});

app.get('/hello', (req, res) => {
	res.end('Hello from the hello route');
});

module.exports = app;
