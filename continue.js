//PARALLAX FUNCTION
$(window).scroll(function(e) {
	var scrolled = $(window).scrollTop();
	$(".one").css("bottom", -(scrolled * 0.2) + "px");
	$(".two").css("bottom", -(scrolled * 0.3) + "px");
	$(".three").css("bottom", -(scrolled * 0.4) + "px");
	$(".four").css("bottom", -(scrolled * 0.5) + "px");
	$(".five").css("bottom", -(scrolled * 0.6) + "px");
});
