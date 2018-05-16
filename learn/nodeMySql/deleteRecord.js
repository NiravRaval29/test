/*
	Delete one record in database.
*/

var mysql = require('mysql');


var con = mysql.createConnection({
	host:'localhost',
	user:'root',	//mysql userName
	password:'',	//mysql password
	database : 'test'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DELETE FROM student where id=6";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Delete One Record ",result.affectedRows);
    console.log("Delete One Record ",result);
  });
});