// Anonymous Function
//	Anonymous Function is function without a function name and store in the as variable.
// function have no name its called anonymous function.

/*	This is javascript Function */
function printStuff(stuff){
	console.log(stuff);
}
// printStuff("hello world");

/*	This main function called printStuff function directly*/
function main(anotherFunction, value){
	anotherFunction(value);
}
main(printStuff,"This is simple Function called ");


/*	Anonymous function start here */
var AnonymousFunction = function(value){
	console.log(value);
}

function Main(anotherFunction,value){
	anotherFunction(value);
}
Main(AnonymousFunction, "This is Called AnonymousFunction value")

//pass the function as an argument to the another function.
Main(function(stuff){console.log(stuff)},"Pass Function in Function argument");