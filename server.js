// Declaring variables that Require express and express-handlebars 
var express = require("express");
// var override = require("method-override");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8000;

var app = express();
 // Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));



app.use("/", routes);

app.listen(port);