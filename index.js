const express = require('express');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
	res.send('Vercel API...');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
