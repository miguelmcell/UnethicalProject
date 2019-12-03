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
app.use(express.urlencoded())
connection.connect();
// 253153934829
// Creating a GET route that returns data from the 'users' table.
app.get('/getAccount', function (req, res) {
    // Connecting to the database
    let accountId = req.query['accountId'];
    // Executing the MySQL query (select all data from the 'users' table).
    let sqlQuery = 'SELECT * FROM users WHERE account_id ="' + accountId + '"';
    connection.query(sqlQuery, function(error,results,fields){
      if(error) res.status(500).send('Err 500: Internal Server Error');
      res.send(results);
    });
});
app.post('/createAccount', function (req, res) {
    // Connecting to the database
    console.log("createaccount hit");
    let query = req.body.query;
    console.log(query);
    // Executing the MySQL query (select all data from the 'users' table).
    // INSERT INTO users(account_id,plain_text_password,name) VALUES ('458151934522', 'Money123', 'Tom');
    let sqlQuery = '' + query;
    console.log("now querying");
    connection.query(sqlQuery, function(error,results,fields){
      if(error) res.status(500).send('Err 500: Internal Server Error');
      console.log("it worked");
      res.send("Account added!");
    });
});

// Starting our server.
app.listen(8080, '0.0.0.0');
console.log('Running on http://0.0.0.0:8080');
