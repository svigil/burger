// Create Dependencies
var mysql = require('mysql');
// connect to sql db
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
})

// Ensure connection is working
connection.connect(function(err){
    if(err)throw err;
    console.log("Connect as id: " + connection.threadid);
});

// Export the sql connection
module.exports = connection;