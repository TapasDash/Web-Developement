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

app.post('/delete/:id', (req, res) => {
  // Write code to delete from the database
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, result) => {
      res.redirect('/index');
    });
});

app.listen(3000);
