function route(handle,pathname){
	console.log("Routing a request for : ", pathname);
	/*if(typeof handle[pathname] === 'function'){
		handle[pathename]();
	}else{
		console.log("No handle for ", pathname);
	}*/
}
exports.route = route;