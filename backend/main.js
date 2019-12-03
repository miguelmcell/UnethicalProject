const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors');

const connection = mysql.createConnection({
  host     : '35.193.109.77',
  user     : 'root',
  password : '123456789',
  database : 'users'
});

const app = express();
app.use(cors());
connection.connect();
// 253153934829
// Creating a GET route that returns data from the 'users' table.
app.get('/getAccount/:accountId', function (req, res) {
    // Connecting to the database
    let accountId = req.params.accountId;
    // Executing the MySQL query (select all data from the 'users' table).
    let sqlQuery = 'SELECT * FROM users WHERE account_id ="' + accountId + '"';
    connection.query(sqlQuery, function(error,results,fields){
      if(error) throw error;
      res.send(results);
    });


    // connection.getConnection(function (err, connection) {
    // if (err) throw err;
    // let accountId = req.params.accountId;
    // // Executing the MySQL query (select all data from the 'users' table).
    // let sqlQuery = 'SELECT * FROM users WHERE account_id ="' + accountId + '"';
    // console.log(sqlQuery);
    // connection.query(sqlQuery, function (error, results, fields) {
    //   // If some error occurs, we throw an error.
    //   if (error) throw error;
    //
    //   // Getting the 'response' from the database and sending it to our route. This is were the data is.
    //   res.send(results)
    // });
  // });
});

// Starting our server.
app.listen(8080, '0.0.0.0');
console.log('Running on http://0.0.0.0:8080');
