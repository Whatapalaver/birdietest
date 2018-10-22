const express = require('express');
const app = express();
const dataAPI = require('../api/data');
const fieldAPI = require('../api/fields');
const connection = require('../databasePool');
const path = require('path')
let cors = require('cors');

// move this to the api folder when you have a better idea of api structure
// replace with an app.use which will direct to the new api router

connection.connect();
app.use(cors())
app.use('/api/data', dataAPI)
app.use('/api/fields', fieldAPI)

  // Serve the static files from the React app
  app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.use(function(err, req, res, next){
  // we send the error with an error message
  res.status(422).send({error: err.message});
});

module.exports = app;