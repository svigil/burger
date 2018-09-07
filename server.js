// Create Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodoverride = require("method-override");
var expHbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodoverride("_method"));

// Set Handlebars.
app.engine("handlebars", expHbs({defaultLayout: "main" }));
    
app.set("view engine", "handlebars");

// Set up routes
var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);

var PORT = 3000;
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("App listening on PORT " + PORT);
});