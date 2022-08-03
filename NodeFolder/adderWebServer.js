/**
 * adderWebServer.js
 */

 console.log("Starting HTTPServer on port 8080 ...")

const http = require('http');
const url = require('url');
const fs = require('fs');
const addmod = require('./addmod.js');
http.createServer(function (req, res) {
const q = url.parse(req.url, true);
const filename = "." + q.pathname;
if (q.pathname=="/add.js"){
addmod.add(req,res,q.query);
}
else{ 
fs.readFile(filename, function(err, data) {
if (err) {
res.writeHead(404, {'Content-Type': 'text/html'});
return res.end("<h2 style = 'color:red;'>404 Not Found</h2>");
} 
res.writeHead(200); // Content-Type not included
res.write(data);
return res.end();
});
}
}).listen(8080);
