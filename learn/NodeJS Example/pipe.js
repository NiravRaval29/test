/*	pipe Example */

var fs = require("fs");
var readableStream = fs.createReadStream("input.txt");
var writeableStream = fs.createWriteStream("out.txt");

/*	This pipe throw whole contain move to destination file.
	SourceFile.pipe(destination file)
	*/
	
readableStream.pipe(writeableStream);