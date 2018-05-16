var fs = require('fs');

fs.readFile("input.txt",function(err,data){
	if(err)
	{
	console.log(err);
	}else{
		console.log("Async data is :- ",data.toString());	//this callback function wait to the data.
	}
});

var data = fs.readFileSync("input.txt");
console.log("sync Data is :- ",data.toString());
console.log("This is the End");