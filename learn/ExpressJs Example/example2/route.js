var express = require('express');
var app = express();

var dataFile = require('./database/database.json');

/*	Default Route */
app.get('/',function(req,res){
	console.log("default route called");
	res.send('default route call');
});

/*	Friend Route - List of Json Data */
app.get('/friends',function(req,res){
	console.log("friends route called");
	// res.send('friends route call');
	var info = '';
	dataFile.data.forEach(function(item){
		console.log("item",item);
		
		info += `
			<h1>${item.Name}</h1> <br />
			<h3> ${item.title}</h3>
		`;
	});

	res.send(info);
});

/*	Find Perticuler Record with Index id */
app.get('/friends/:friendsId',function(req,res){
	
	var friend = dataFile.data[req.params.friendsId]; //get data value

	res.send(`
		<h1> ${friend.Name}</h1>
		<h3> ${friend.title}</h1>
	`)

})

app.listen(8000);
console.log("listen port is ",8000);