const express = require("express");
const fs = require("fs");
const app = express();

app.get("/:id/:name", function(req, res) {
  request = { id: req.params.id, name: req.params.name };
  let jsonContent = JSON.stringify(request);
  fs.writeFile("jsonData.txt", jsonContent, "utf8", function(err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    res.send("JSON data written sucessfully!!");
  });
});

app.listen(3000, function() {
  console.log("Started on PORT 3000");
});
