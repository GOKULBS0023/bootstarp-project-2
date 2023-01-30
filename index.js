$(window).scroll(function(){
	var scrollEl = window.scrollY;
	if ($(document).width()> 624) {
		if (scrollEl > 3) {
		$("nav").addClass("nav-bg");
		$("#nav-brand").addClass("navbar-bg-brand");
	} else if (scrollEl < 3){
		$("nav").removeClass("nav-bg");
		$("#nav-brand").removeClass("navbar-bg-brand");
	}
	}
})

$(document).ready(function (){
	if ($(document).width()<624) {
		$("nav").addClass("nav-bg");
		$("#nav-brand").addClass("navbar-bg-brand");
	}
})