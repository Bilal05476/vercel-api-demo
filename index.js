import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 5100;

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
