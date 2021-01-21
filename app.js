import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import apiRouter from './routes/index'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(cors())

apiRouter(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});