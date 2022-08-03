/**
 * index.js
 * 
 * @author Alem
 * @since 2022 - 08 - 01
 */


console.log("Starting HTTPServer for HelloWorld ...")

const http = require('http');
//Create and start an HTTPServer
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end("<h1>Hello World!</h1>");
}).listen(8080);
console.log("Listening on port 8080")