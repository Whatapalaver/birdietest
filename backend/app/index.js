const express = require('express');

const app = express();
const port = 3306;

app.get('/api', (req, res) => {
  res.json({});
});

module.exports = app;