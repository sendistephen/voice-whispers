import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './database';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
	res.send('Server runing');
});

app.listen(port, async () => {
	await connectToDatabase();
	console.log(`Server is runing on port ${port}`);
});
