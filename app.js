/*global $*/

$(".has-ripple").click(function(e){
  var ripple = $("<div class='ripple'>");
  var offsetX = e.pageX - $(this).offset().left;
  var offsetY = e.pageY - $(this).offset().top;
  var size = .8 * ($(this).width() > $(this).height() ? $(this).width() : $(this).height());
  ripple.css({left:offsetX, top:offsetY, height:size, width:size});
  ripple.one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){$(this).remove()});
  $(this).append(ripple);
});


$(".popout .btn").click(function() {
	$(this).toggleClass("active");
	$(this).closest(".popout").find(".panel").toggleClass("active");
});
$(document).click(function() {
	$(".popout .panel").removeClass("active");
	$(".popout .btn").removeClass("active");
});
$(".popout .panel").click(function(event) {
	event.stopPropagation();
});
$(".popout .btn").click(function(event) {
	event.stopPropagation();
});