// Set up MySQL connection.
var mysql = require('mysql');
// connect to sql db

if (process.env.JAWSDB_URL){
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
})
};
// Ensure connection is working
connection.connect(function(err){
    if(err)throw err;
    console.log("Connect as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;