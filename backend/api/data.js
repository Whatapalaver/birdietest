const express = require('express');
const router = express.Router();
const connection = require('../databasePool');



router.get('/', function (req, res) {
  let field = 'education'
  const sql = `SELECT DISTINCT ${field} AS name, COUNT(*) AS countOf, ROUND(AVG(age),1) AS avAge FROM census_learn_sql WHERE ${field} IS NOT NULL GROUP BY ${field} ORDER BY countOf DESC`


  // connection.connect();
  connection.query(sql, function(err, recordset) {
    if(err) console.log(err);
    res.end(JSON.stringify(recordset)); // Result in JSON format
  })
});

router.get("/:id", function(req, res) {
  let field = req.params.id
  const sql = `SELECT DISTINCT ${field} AS name, COUNT(*) AS countOf, ROUND(AVG(age),1) AS avAge FROM census_learn_sql WHERE ${field} IS NOT NULL GROUP BY ${field} ORDER BY countOf DESC`

  connection.query(sql, function(err, recordset) {
    if(err) console.log(err);
    res.end(JSON.stringify(recordset)); // Result in JSON format
  })
});


module.exports = router;