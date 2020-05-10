/*

<form action="/create" method="post">
    <!-- Add the name attribute -->
    <input name="itemName" type="text">
    <input type="submit" value="Add">
</form>

*/

const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

app.post('/create', (req, res) => {

  // Print the value submitted from the form
  console.log(req.body.itemName);
  
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('index.ejs', {items: results});
    }
  );
});

app.listen(3000);
