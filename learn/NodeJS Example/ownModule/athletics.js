// normal way to define module
function shortjump(){
	console.log("shortjump function is called");
}

function longjump(){
	console.log("longjump function is called ");
}

module.exports.shortjump = shortjump;
module.exports.longjump = longjump;

/*	
 When More then much module then what to do? you right module.exports in multitype.? yahhh its bad ideas
 Solution is here....
*/
//another way to defined module 
module.exports = {
	shortjump : function(){
		console.log("shortjump is called here");
	},
	longjump : function(){
		console.log("longjump is called here");
	}
}