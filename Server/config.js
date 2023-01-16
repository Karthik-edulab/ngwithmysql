let mysql = require('mysql');

//connect with mysql
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'students',
});
  
   //check the connection
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
  
  module.exports=connection;