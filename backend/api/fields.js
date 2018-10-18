const express = require('express');
const router = express.Router();
const connection = require('../databasePool');

router.get("/", function(req, res) {
  const sql = "SELECT Column_name FROM Information_schema.columns WHERE Table_name like 'census_learn_sql'"
  
  connection.query(sql, function(err, recordset) {
    if(err) console.log(err);
    res.end(JSON.stringify(recordset)); // Result in JSON format
  })
});

module.exports = router;