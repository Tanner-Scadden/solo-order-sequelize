const express = require('express');
const api = require('./routes');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
require('dotenv').config();

const { SERVER_PORT } = process.env;

app.use(bodyParser.json());
app.use('/api', api);

router.get('/ap', (req, res, next) => {
    res.json('hi');
})

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))