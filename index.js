const express = require('express')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

// Routes
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();
connectDB();

const app = express;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello World' });
	// res.end('Hello World');
});

app.get('/hello', (req, res) => {
	res.end('Hello from the hello route');
});

app.use('/api/users', userRoutes);

// module.exports = app;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
