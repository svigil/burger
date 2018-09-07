// Set up MySQL connection.
var mysql = require('mysql');
// connect to sql db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
})

// Ensure connection is working
connection.connect(function(err){
    if(err)throw err;
    console.log("Connect as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;