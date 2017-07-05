var express = require("express");
var bodyParser = require("body-parser");
var Superhero = require("./models/Superhero");
var app = express();
var port = 3000;
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
  res.json("Hello from Get");
});

app.post("/", function(req,  res){
  var superhero = new Superhero();
  superhero.name = req.body.name;
  superhero.superpower = req.body.superpower;
  superhero.save(function(superhero){
      res.send(superhero);
    }, function(err){
      res.send(err);
    }
  );
});

var server = app.listen(port, function(){
  console.log("listening on port",port);
});
