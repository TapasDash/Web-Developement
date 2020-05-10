/*

<form action="/create" method="post">
    <!-- Add the name attribute -->
    <input name="itemName" type="text">
    <input type="submit" value="Add">
</form>

*/

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
