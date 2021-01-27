import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import apiRouter from './routes/index'
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(cors())

apiRouter(app);

app.listen(port, () => {
    console.log(`server listening port ${port}`);
});