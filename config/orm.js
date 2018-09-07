// Create Dependencies
var connection = require('./connection.js');

// Creating a collection query to add in created table and pass to model
var orm = {
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err,res){
            if(err) throw err;
            cb(res)
        })
    }
}

module.exports = orm;