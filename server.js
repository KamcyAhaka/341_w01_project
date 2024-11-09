const express = require('express');
const dotenv = require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, () => console.log(`App is listening on localhost:${port}`))
