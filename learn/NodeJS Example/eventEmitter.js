/*	When any event work with application that events module required to include here*/
var event = require("events");

var eventEmitter = new event.EventEmitter();

/*	This function call when event is occours */
var ringbell = function(){
	console.log("When event occours that Ring the bell...ring...ring...ring");
}

eventEmitter.on("doorOpen",ringbell); 	// defined the event and call the ringbell function.
eventEmitter.emit("doorOpen");		//call the function 


/*	with parameter pass the event function */
eventEmitter.on("ringbells",function(message){
	console.log(message)
})
eventEmitter.emit("ringbells","parameter pass event function here")