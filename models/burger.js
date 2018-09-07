// Create Dependencies
var orm = require("../config/orm.js");

var burger = {
    // Pulls in all of the burgers from the DB
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },

    // Changes burgers to devoured
    update: function(id, cb){
        orm.update("burgers", id, cb);
    },

    // Adds a burger
    create: function(name, cb){
        orm.create("burgers", name, cb);
    }

}

// export DB functions for the controller
module.exports = burger;