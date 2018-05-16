/*	This is stream demo  readable and writable stream	*/

var fs = require("fs");
var readableStream = fs.createReadStream("input.txt");
var data = '';

readableStream.setEncoding('UTF8');
readableStream.on('data',function(chunk){
	console.log("chunk", chunk);
	data += chunk;
})

readableStream.on('end',function(){
	console.log(data);
})

var writeData = "Hellow World";

var writeableStream = fs.createWriteStream("output.txt");
writeableStream.write(writeData, 'UTF8');
writeableStream.end();
writeableStream.on('finish',function(){
	console.log("Write Completed");
})