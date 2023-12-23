import express from 'express';
import logger from 'morgan';

const port = process.env.PORT ?? 4000

const app = express();
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('<h1>Sleycs</h1>')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})