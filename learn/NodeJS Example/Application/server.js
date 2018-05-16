/*	This is Server File */

var http = require('http');
var url = require('url');

function startServer(route,handle){
	function onRequest(req,res){
		// console.log("request fired");

		var pathname = url.parse(req.url).pathname;
		console.log("Request Received for :- ", pathname);
		route(handle,pathname);
		res.writeHead(200,{"content-type": "text/plain"});
		res.write("This is our first Application");
		res.end();
	}

	http.createServer(onRequest).listen(8888, console.log("http://localhost:8888"));

	console.log("code exicuted further....");	
}
exports.startServer = startServer;