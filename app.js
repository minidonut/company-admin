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
            a.removeClass('mdl-shadow--2dp');
            a.removeClass('raised');
            selected.pop(a);
        }
        else {
            a.addClass('mdl-shadow--2dp');
            a.addClass('raised');
            selected.push(a);
        }
        event.stopPropagation();
    });
    
    $("#content").click(function(){
       selected.forEach(function(v,i){
           v.removeClass('mdl-shadow--2dp');
           v.removeClass('raised');
       });
       selected = [];
    });
    
    
    $('.action').click(function(event){
        var id = event.currentTarget.id;
        if (id === "distribution" || id === "dish" || id ==="guard"){
            id = "duty";
        }
        
        selected.forEach(function(v,i){
           v.removeClass('mdl-shadow--2dp');
           v.removeClass('raised');
           let arr = v["0"].classList;
           v.removeClass(arr[arr.length-1]);
           v.addClass(id);
            
        });
        selected = [];
    });
    
    $("#commit").click(function(){
        console.log($('#where')["0"].value);
    });
    
    $("#cancel").click(function(){
        $('#where')["0"].value = "";
        $('#details')["0"].value = "";
    })
    
    
    
    
});
