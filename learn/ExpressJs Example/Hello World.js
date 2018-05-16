var express = require('express');
var app = express();

//Default Route Define here
app.get('/',function(req,res){
	console.log("req",req);
	console.log("Welcome to First Program Of Express Js");
	
	//This command through you can print msg in browser page.
	// res.send("Welcome to First Program Of Express Js")
	res.send("hello chirag")

})

var server = app.listen('8000',function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("server : ",server.address())

	console.log("Example App Listening at http://%s:%s",host,port);
})