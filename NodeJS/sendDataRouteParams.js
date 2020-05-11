/*
<% items.forEach((item) => { %>

  <form action="/delete/<%= item.id %>" method="post">
    <input type="submit" value="Delete">
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

app.post('/delete/:id', (req, res) => {
  // Output the value that got passed to the route parameter
  console.log(req.params.id);
  
  res.redirect('/index');
});

app.listen(3000);
