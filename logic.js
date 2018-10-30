document.addEventListener("DOMContentLoaded", function(){
	$("#load-wrapper").delay(700).fadeOut('slow');

	$("#loader")
		.delay(300)
		.fadeOut();
});
AOS.init()
mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
