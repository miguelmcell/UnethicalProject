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
});
app.post('/createAccount/:accountId', function (req, res) {
    // Connecting to the database
    console.log("createaccount hit");
    let accountId = req.params.accountId;
    // Executing the MySQL query (select all data from the 'users' table).
    // INSERT INTO users(account_id,plain_text_password,name) VALUES ('458151934522', 'Money123', 'Tom');
    let sqlQuery = '' + accountId;
    console.log("now querying");
    connection.query(sqlQuery, function(error,results,fields){
      if(error) throw error;
      console.log("it worked");
      res.send("Account added!");
    });
});

// Starting our server.
app.listen(8080, '0.0.0.0');
console.log('Running on http://0.0.0.0:8080');
