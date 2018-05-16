/*	Mysql Simple connection
  	npm install mysql --save 	//module run when you use this dependancy

	Refer Link : https://www.wikitechy.com/tutorials/node-js/node-js-mysql-create-table
*/
var mysql = require('mysql');

var con = mysql.createConnection({
	host:'localhost',
	user:'root',	//mysql userName
	password:''		//mysql password
});

con.connect(function(err){
	if(err){
		console.log("err",err);
	}else{
		console.log("Mysql is connected");
	}
})