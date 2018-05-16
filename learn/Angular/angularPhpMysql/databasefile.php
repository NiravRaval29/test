<?php
// error_reporting(0);
// header("Access-Control-Allow-Origin: *");   
// header("Content-Type: application/json; charset=UTF-8");  
/* myServer = "localhost";
 myDb = "test";
 myUser = "root";
 myPassword = "";
*/
$conn = new PDO("mysql:host='localhost';dbname='test'", "root", "");   
$result = $conn->query("SELECT * FROM tbl_name order by id");     
$outp = ""; 
while($rs = $result->fetch()) {     
    if ($outp != "") {$outp .= ",";}     
    $outp .= '{"id":"'  . $rs["id"] . '",'; 
    $outp .= '"name":"'   . $rs["name"]  . '",'; 
    $outp .= '"mobile":"'   . $rs["mobile"]  . '",'; 
    $outp .= '"email":"'. $rs["email"]  . '"}'; 
    } 
$outp ='{"details":['.$outp.']}'; 
echo($outp); 
?> 