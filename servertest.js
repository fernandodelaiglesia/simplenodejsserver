/*var http = require('http');
var https = require('https'), fs = require('fs');
var querystring = require('querystring');

http.createServer(function (req, res) {

  	if (req.method == 'POST') {
    	req.on('data', function(chunk) {
      	console.log("[200] " + req.method + " to " + req.url);
      	console.log("Received body data:"+chunk.toString());

      	res.writeHead(200, "OK", {'Content-Type': 'text/html'});
    	res.end('<html><head><title>Testing</title></head><body><h1>Testing.</h1></body></html>');
    	});
   } else {
    	console.log("[405] " + req.method + " to " + req.url);
    	res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    	res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  	}

}).listen(8080);
*/


var http = require('http');
var https = require('https'), fs = require('fs');
var querystring = require('querystring');

http.createServer(function (req, res) {

     if  (req.method == 'GET') {

	switch(req.url) {

	case '/':
      fs.readFile('./idex.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
	break;

  default:
      res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
      res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
      console.log("[404] " + req.method + " to " + req.url);
  };
}).listen(8080);
