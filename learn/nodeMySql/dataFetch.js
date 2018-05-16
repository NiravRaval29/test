/*Mysql Simple connection
  npm install mysql --save 	//module run when you use this dependancy
*/
var mysql = require('mysql');

var con = mysql.createConnection({
	host:'localhost',
	user:'root',	//mysql userName
	password:'',	//mysql password
	database : 'test'
});

con.connect(function(err){
	if(err){
		console.log("err",err);
	}else{
		console.log("Mysql is connected");
	}

	var sql = "select * from student";
  	con.query(sql, function (err, result) {
    	if (err) throw err;
    	console.log("Fetch Data", result);
  	});

})