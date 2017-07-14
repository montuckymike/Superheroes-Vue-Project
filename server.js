var express = require("express");
var bodyParser = require("body-parser");
var Superhero = require("./models/Superhero");
var mongoose = require("mongoose");
//var mainRoutes = require("./routes/main");
var heroRoutes = require("./routes/superheroes");
var app = express();
var port = 3000;



mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use("/api/main", mainRoutes);
app.use("/api/heroes", heroRoutes);

app.use(express.static(__dirname + "/public"));

// pretty sure I should delete as it is now created in the route -


                // app.delete("/api/heroes/:_id", function(req, res){


                //   Superhero.remove({ _id: req.params._id }, function(err){
                //     if(err){
                //       res.send(err)
                //     } else{
                //       res.send("Laters Superhero")
                //     }
                //   })
                // });

var server = app.listen(port, function(){
  console.log("listening on port",port);
})
