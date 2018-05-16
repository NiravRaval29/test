
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/StudentDB';

MongoClient.connect(url,function(err,db) {
	if(err){
		console.log(err);
	}
	console.log("Connected");

	var cursor = db.collection('Employee').find();
	console.log("cursor",cursor);
	db.close();
})