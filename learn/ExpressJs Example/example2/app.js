/* This file include set dynamic port, get json data, and print json data using forloop. */

var express = require('express');
var app = express();
var dataFile = require('./database/database.json'); //Json file data store in dataFile variable

app.set('port',process.env.PORT || 3000);	//dynamic port create mate || if not defined thn 3000 

app.get('/',function(req,res){
	console.log("get request called ");

	var info = '';
	dataFile.data.forEach(function(item){		//forloop through data print 
		console.log("item",item);
		info += `
			<li>
				<h3>${item.Name}</h3>
				<h4>${item.title} </h4>
			</li>
		`
	})

	
	res.send(`
		<h1>Welcome to Json File </h1>
		${info}
	`);
});

// Static port use that use this code.
/*var server = app.listen(8000,function(){
	console.log("Server access is .... Port : ",8000);
});*/

// Dynamic Port change and use it this code.
var server = app.listen(app.get('port'),function(){
	console.log("listion to port " + app.get('port'))
});