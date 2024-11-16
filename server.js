const express = require('express');
require('dotenv').config();
const mongodb = require('./data/database');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.use(express.json());

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () =>
      console.log(`Database is listening and server is live on localhost:${port}`)
    );
  }
});
