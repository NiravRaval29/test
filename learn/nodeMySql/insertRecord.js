/*
	Insert one record in database.
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
  var sql = "INSERT INTO student (name, rollno, phoneNo) VALUES ('ajay', '5', '5252552')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    console.log("1 record inserted Id :",result.insertId);
  });
});