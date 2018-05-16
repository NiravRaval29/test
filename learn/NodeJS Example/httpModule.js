/*	Create Server with http module */
var http = require("http");

/*	createServer() function is built in function and listen also that have one argument of port Number*/

http.createServer(function(request,response){

	response.writeHead(200, {"Content-Type":"text/pain"});		//this have write head with content type
	response.write("Hello World");		// this function print text or msg in screen.
	response.end();	// this is built in function that indicate end the response
}).listen("8080",console.log("open browser and see output -  http://localhost:8080/"));