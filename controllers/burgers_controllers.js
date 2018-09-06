// Create Dependencies
var express = require("express");
var router = express.Router();

// Set up router
router.get("/", function(req,res){
    res.render("index");
});

module.exports = router;