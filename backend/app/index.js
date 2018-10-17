const express = require('express');
const app = express();
const connection = require('../databasePool');

// move this to the api folder when you have a better idea of api structure
// replace with an app.use which will direct to the new api router

const sql = 'SELECT DISTINCT education AS name, COUNT(*) AS countOf, ROUND(AVG(age),1) AS avAge FROM census_learn_sql WHERE education IS NOT NULL GROUP BY education ORDER BY countOf DESC'

app.get('/api', function (req, res) {
  connection.connect();
  connection.query(sql, function(err, recordset) {
    if(err) console.log(err);
    res.end(JSON.stringify(recordset)); // Result in JSON format
  })
});

module.exports = app;