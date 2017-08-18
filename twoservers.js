var http = require('http')

//we define the ports we want to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequest1(request, response) {
  response.end("It works!  Path hit: " + request.url)
}

function handleRequest2(request, response) {
  response.end("Hello!  Path hit: " + request.url)
}

//create server
var server1 = http.createServer(handleRequest1)
// We need two different functions to handle requests,one for each.
server1.listen(PORTONE, function() {
  console.log("Server listening on: http://localhost:", PORTONE)
})

var server2 = http.createServer(handleRequest2)

server2.listen(PORTTWO, function() {
  console.log("Server listening on: http://localhost:", PORTTWO)
})