var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write(res.body); //write a response to the client
  console.log(res.body);
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080
