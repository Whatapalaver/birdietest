const express = require('express');
const app = express();
const dataAPI = require('../api/data');
const fieldAPI = require('../api/fields');
const connection = require('../databasePool');

// move this to the api folder when you have a better idea of api structure
// replace with an app.use which will direct to the new api router

connection.connect();
app.use('/api/data', dataAPI)
app.use('/api/fields', fieldAPI)

app.use(function(err, req, res, next){
  // we send the error with an error message
  res.status(422).send({error: err.message});
});

module.exports = app;