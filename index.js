import express from 'express';
import bodyParser from 'body-parser';
import router from './routes.js';
const PORT=4100;
const app = express();
app.use(bodyParser.json());app.listen(PORT);
console.log(`Listening on port http://localhost:${PORT}`);
app.use('/', router);
