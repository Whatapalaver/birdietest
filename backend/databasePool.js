require('dotenv').load({ silent: true });
const mysql = require('mysql');
const databaseConfiguration = {
  host     : process.env.BIRDIE_HOST,
  user     : process.env.BIRDIE_USER,
  password : process.env.BIRDIE_PASSWORD,
  database : process.env.BIRDIE_DATABASE,
  port: 3306
};
const connection = mysql.createConnection(databaseConfiguration);

// connection.connect()

// connection.query('SELECT COUNT(*) FROM census_learn_sql;', function (err, response) {
//   if (err) throw err

//   console.log('Row count is: ', response);
// })

// connection.end()

module.exports = connection;