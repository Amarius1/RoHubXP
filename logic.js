document.addEventListener("DOMContentLoaded", function(){
	$("#load-wrapper").delay(700).fadeOut('slow');

	$("#loader")
		.delay(300)
		.fadeOut();
});
AOS.init()
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
//$("#container").mousemove(function(e) {
  parallaxIt(e, "#title", -30);
  parallaxIt(e, "#buttons", -40);
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
