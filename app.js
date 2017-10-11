/*global Vue*/

var app = new Vue({
  el: '#app',
  data: {
    message: '안녕하세요 Vue!',
    company: [
        { name: "CSH" , location: "HOME" },
        { name: "MKH" , location: "OUTSIDE" },
        { name: "JSW" , location: "OUTSIDE" }
        ]
  },
  methods: {
      greet: function(event){
          alert("Hello world!");
      }
  }
})


var Man = function(name, grade, location, action){
    
    this.location = location;
    this.action = action;
    this.grade = grade;
    this.name = name;
    
}


