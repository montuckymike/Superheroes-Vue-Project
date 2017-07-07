var express = require("express");
var bodyParser = require("body-parser");
var Superhero = require("./models/Superhero");
var app = express();
var port = 3000;
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));


app.get("/api",function(req,res){
  Superhero.find(function(err,superheroes){
    if (err) {
      res.send(err)
    }else {
      res.json({data: superheroes, message: "Heroes Received Good"});
    }
  })
});

app.get("/api:_id", function(req,res){
  Superhero.findById(req.params._id, function(err, superhero){
    if (err) {
      res.send(err)
    }else {
      res.json({data: superhero, message: "Hereo Received Good"});
    }
  })
});



app.post("/api", function(req,  res){
  console.log("Hitting Post Route");
  var superhero = new Superhero();
  superhero.name = req.body.name;
  superhero.superpower = req.body.superpower;
  superhero.img = req.body.img;

  superhero.save().then(function(superhero){
      res.json({message: "Hero Created Good", data: superhero});
    }, function(err){
      res.send("Failed to save");
    }
  );
});

app.delete("/api/:_id", function(req, res){

  Superhero.remove({ _id: req.params._id }, function(err){
    if(err){
      res.send(err)
    } else{
      res.send("Laters Superhero")
    }
  })
});

var server = app.listen(port, function(){
  console.log("listening on port",port);
});
