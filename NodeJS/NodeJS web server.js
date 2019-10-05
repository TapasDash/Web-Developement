const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  //when a client is gonna request a page to the http server this is what gonna get called
  res.writeHead(200, { "content-type": "text/html" });
  /*
  we are setting the header to tetx/html
  The Content-Type entity header is used to indicate the media type of the resource.

In responses, a Content-Type header tells the client what the content type of the returned content actually is
  -> it tells the browser that information thats being sent to it is html and you should parse it
  as HTML only 
  */
  fs.readFile("index.html", (error, data) => {
    //here data will be the content of index.html
    if (error) {
      res.writeHead(404);
      res.write("Error: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
  res.write("Hello Node");
  res.end();
});

server.listen(PORT, error => {
  if (error) {
    console.log(`Server went wrong due to the error: ${error}`);
  } else {
    console.log(`Server is listening on PORT: ${PORT} `);
  }
});
