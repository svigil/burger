// Create Dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Set up router to get the data
router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data);
        res.render("index", { burger_data });
    });
})

// Set up router to put the data once the burger has been eaten
router.put("/burgers/update", function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

// Post the new burgers to the user screen
router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        res.redirect("/");
    });
});

// Export routes for server.js
module.exports = router;