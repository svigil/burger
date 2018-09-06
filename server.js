
// Create Dependencies
var express = require ('express');
var bodyParser = require('body-parser');
var methodoverride = require('method-override');
var expHbs = require('express-handlebars');

var port = process.env.port || 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodoverride('_method'));

// Set Handlebars.
app.engine('handlebars',expHbs({
    defaultLayout: 'main'
}));

app.set('view engine','handlebars');

var port = 3000;
// Start our server so that it can begin listening to client requests.
app.listen(port,function(){
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port);
});