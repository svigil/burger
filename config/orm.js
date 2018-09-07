// Create Dependencies
var connection = require('./connection.js');

// Creating a collection query to add in created table and pass to model
var orm = {
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err,result){
            if(err) throw err;
            cb(result)
        })
    },
// add in update method to move da eaten burgers
    update: function(tableInput, condition, cb){
        connection.query("UPDATE " + tableInput + " SET devoured = true WHERE id = " + condition + ";", function(err,result){
            if(err) throw err;
            cb(result);
        })
    }
}

// Export the orm object to the model
module.exports = orm;