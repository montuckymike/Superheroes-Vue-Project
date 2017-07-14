var mongoose = require("mongoose");
var VillainSchema = new mongoose.Schema({
  name: String,
  img: String,
  evilPower: String,
});

module.exports = mongoose.model("Villain", VillainSchema);
