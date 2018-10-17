const mysql = require('mysql');
const databaseConfiguration = require('./secrets/databaseConfiguration');
const connection = mysql.createConnection(databaseConfiguration);

// connection.connect()

// connection.query('SELECT COUNT(*) FROM census_learn_sql;', function (err, response) {
//   if (err) throw err

//   console.log('Row count is: ', response);
// })

// connection.end()

module.exports = connection;