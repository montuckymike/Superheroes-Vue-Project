var express = require("express");
var Router = express.Router();
var Villain = require("../models/Villain");

Router.route("/")
  .get(function(req, res){
    Villain.find(function(err, villains){
      if(err){
        res.send(err)
      }else {
        res.json({message: "Villain successfully retrieved", data: villains});
      }
    });
  })
  .post(function(req, res){
    console.log("In the post route villain");
    var villain = new Villain();
    villain.name = req.body.name;
    villain.evilPower = req.body.evilPower;
    villain.img = req.body.img;

    villain.save(function(err, villain){
      if(err){
        res.send(err);
      }else{
        res.json({message: "Villain successfully saved", data: villain});
      }
    })
  })

Router.route("/:_id").get(function(req, res){
  Villain.findById(req.params._id, function(err, villain){
    if(err){
      res.send(err, "error")
    }else {
      res.json({message: "villain received", data: villain});
    }
  });
}).delete(function(req, res){
  Villain.remove({ _id: req.params._id }, function(err){
    if(err){
      res.send(err);
    }else {
      res.send("Villain was deleted");
    }
  })
})


module.exports = Router;
