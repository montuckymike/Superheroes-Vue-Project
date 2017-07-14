var title = "Villains";
var app = new Vue ({
  el: "#app-villain",
  data: {
    title: title,
    evilVillains: undefined,
    postTitle: "Create a Villain",
    name: undefined,
    evilPower: undefined,
    img: undefined
  },

  created: function(){
    this.fetchData()
  },
  methods: {
    fetchData: function(){
      var self = this;
      $.ajax({
        method: "GET",
        url: "/api/villains"
      }).done(function(response){
        console.log(response);
        self.evilVillains = response.data;
        console.log("Received Data", response);
      })
    },
    postEvilVillian: function(){
      var self = this;
      var newVillain = {
        name: this.name,
        evilPower: this.evilPower,
        img: this.img,
      };
      console.log(newVillain);
      $.ajax({
        url: "/api/villains",
        method: "POST",
        data: newVillain
      }).done(function(response){
        console.log(response);
        console.log(response.data, "Villain Created");
      });
    },
    deleteEvilVillain: function(_id){
      console.log("Adios Villain", _id);
      var self = this;
      $.ajax({
        method: "DELETE",
        url: "api/villains/" + _id
      }).done(function(response){
        console.log(response);
      })
    }
  }
});
