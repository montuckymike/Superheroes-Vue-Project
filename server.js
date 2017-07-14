var express = require("express");
var bodyParser = require("body-parser");
var Superhero = require("./models/Superhero");
var mongoose = require("mongoose");
//var mainRoutes = require("./routes/main");
var heroRoutes = require("./routes/superheroes");
var villainRoutes = require("./routes/villains");
var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use("/api/main", mainRoutes);
app.use("/api/heroes", heroRoutes);
app.use("/api/villains", villainRoutes);

app.use(express.static(__dirname + "/public"));

var server = app.listen(port, function(){
  console.log("listening on port",port);
})
