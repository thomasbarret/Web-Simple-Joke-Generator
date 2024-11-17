import express, { Request, Response } from 'express';
import axios from 'axios';
import path from 'path';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const jokeData = response.data;

        res.render('index', {
            setup: jokeData.setup,
            delivery: jokeData.punchline,
        });
    } catch (error) {
        res.status(500).send('Failed to fetch joke');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
