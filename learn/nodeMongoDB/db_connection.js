/*
	Connection with mongodb and nodejs.
	this is connection file to how to connect mongodb using nodejs.
	Reference link : https://www.wikitechy.com/tutorials/node-js/node-js-mongodb

	1. you can install mongodb in ur local system (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
	2. c:// create one folder data (c:\data\db)
	3. run server : open CMD : "C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe";
	4. then run this script node filename.js
*/


var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/StudentDB';

MongoClient.connect(url,function(err,db) {
	if(err){
		console.log(err);
	}
	console.log("Connected");
	// console.log("db",db);
	db.close();
})
