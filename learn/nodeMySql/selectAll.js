/*Mysql Simple connection
  npm install mysql --save 	//module run when you use this dependancy
  Select all record 
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

	// Fetch All Records.
	var sql = "select * from student";
  	con.query(sql, function (err, result) {
    	if (err) throw err;
    	console.log("Fetch All Records :", result);
  	});

  	// Fetch Selected Record 
  	var sql1 = "select * from student where name = 'nirav'";
  	con.query(sql1, function (err, result) {
    	if (err) throw err;
    	console.log("Fetch single Record :", result);
  	});

})