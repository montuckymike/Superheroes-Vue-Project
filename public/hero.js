var title = "Superheroes";
var app = new Vue({
  el: "#app",
  data: {
  title: title,
  heroes: undefined,
  postTitle: "Create a Superhero",
  name: undefined,
  superpower: undefined,
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
        url: "/api/heroes"
      }).done(function(response){
        console.log(response);
        self.heroes = response.data;
      console.log("Received Data", response);
      })
    },
    postHero: function(){
      var self = this;
      var newSuperHero = {
        name: this.name,
        superpower: this.superpower,
        img: this.img
      };
      console.log(newSuperHero);
      $.ajax({
        url: "/api/heroes",
        method: "POST",
        data: newSuperHero
      }).done(function(response){
        console.log(response);
        console.log(response.data, "Hero Created");
      });
    },
    deleteHero: function(_id){
      console.log("Audios Hero:", _id);
      var self = this;
      $.ajax({
        method: "DELETE",
        url: "/api/heroes/" + _id
      }).done(function(response){
        console.log(response);
      })
    }
  }
});
