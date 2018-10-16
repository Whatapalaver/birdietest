const express = require('express');
const app = express();
const port = 3306;

// move this to the api folder when you have a better idea of api structure
// replace with an app.use which will direct to the new api router
app.get('/api', (req, res) => {
  res.json({});
});

module.exports = app;