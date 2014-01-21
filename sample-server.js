var http = require('http'),
 simpleModule = require('./simple-module');
 
http.createServer(
  function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(simpleModule.message + '\n');
  }
).listen(3000);
 

console.log('Server running at http://localhost:3000/');
