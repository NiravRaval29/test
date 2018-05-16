/*
  Insert Multiple record at time in database.
*/

var mysql = require('mysql');

var con = mysql.createConnection({
  host:'localhost',
  user:'root',  //mysql userName
  password:'',  //mysql password
  database : 'test'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO student (name, rollno, phoneNo) VALUES ?";
  var values = [
    ['jay','6','123456'],
    ['saslo','7','1234560'],
    ['sahil','8','1234561'],
    ['bhumit','9','1234562'],
    ['parth','10','1234563'],
  ];

  con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("inserted Record :",result.affectedRows);
  });
});