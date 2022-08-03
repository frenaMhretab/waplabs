/**
 * request.js
 */
console.log("Starting the server ...")

 const http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   console.log(req.url);
   res.write(req.url);
   res.end();
 }).listen(8080);