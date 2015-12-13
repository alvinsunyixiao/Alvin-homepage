var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer( function(request,response){

	var pathname = url.parse(request.url).pathname;
	console.log("request for" + pathname.substr(1) + "received");

	fs.readFile(pathname.substr(1), function (err, data) {

		if (err) {
			console.error(err);
			response.writeHead(404,{'Content-type':'text/html'});
		}
		else {
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(data.toString());
		}
		response.end();

	});

}).listen(8081);

console.log('server running at http://172.0.0.1:8081/');