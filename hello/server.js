// loads the core http module for the server
var http = require('http');

// setting up port number: get from environment OR if not set use 1337 
var port = process.env.PORT || 1337;

// creates server and call-back function, will contain response handler code
var server = http.createServer(function(req, res) {
  // set right header and status code
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // output "Hello World" with line end symbol
  res.end('Hello World\n');
});

// Set a port and display the address of the server and the port number
server.listen(port, function() {
  console.log('Server is running at %s:%s ',
    server.address().address, server.address().port);
});

