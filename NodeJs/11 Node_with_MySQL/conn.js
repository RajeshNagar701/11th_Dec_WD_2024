const mysql = require("mysql");  // npm i mysql
const conn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"node_mysql"
});
conn.connect((err)=>{
    if(err)
    {console.warn("error in connection")}
});
module.exports =conn;

// Mysql Connectivity
/*
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

*/


/*

//Creating a Database
con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
	console.log("Database created");
  });
*/
  
/*
//Creating a Database

var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("Table created");
  });

*/


/*
//Insert Into Table

var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("1 record inserted");
  });

*/

/*
//Selecting From a Table

con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
	console.log(result);
  });

*/

/*
//Select With a Filter
 con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
	console.log(result);
  });
*/

/*
//Sort the Result
 con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
	console.log(result);
  });
*/
/*
//Delete Record
 var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("Number of records deleted: " + result.affectedRows);
  });
*/

/*
//Delete a Table
var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("Table deleted");
  });
*/

/*
//Update Table Data

var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log(result.affectedRows + " record(s) updated");
  });
*/





