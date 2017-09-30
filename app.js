var company = [
    { name: "CSH", location: "HOME" },
    { name: "MKH", location: "OUTSIDE" },
    { name: "JSW", location: "OUTSIDE" }
]

/*global $*/
var selected = [];

$(document).ready(function($) {
    console.log("This is grid-layout and jQuery ver");



    $(".man").click(function(event) {
        var a = $(this)
        if (a.hasClass('raised')) {
            a.removeClass('raised');
            selected.pop(a);
        }
        else {
            a.addClass('raised');
            selected.push(a);
        }
        event.stopPropagation();
        console.log(selected.length);
    });
    
    $("#content").click(function(){
       selected.forEach(function(v,i){
           v.removeClass('raised');
       });
       selected = [];
       console.log("clean the selected arr");
    });
    
    
    $("#work").click(function(){
        selected.forEach(function(v,i){
            v.css("background", "#E53935");
        })
    })
    
    
    
});
