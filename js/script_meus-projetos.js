(function($){
  $(function(){

  	//SIDE NAV
	$('.button-collapse').sideNav();

	//SMALL SCREEN ADAPTOR
	if (screen.width < 600){
		$("header #navbar_pin").removeClass("navbar-fixed");
	}
	else {
		$("header #navbar_pin").addClass("navbar-fixed");
	}
	
	//SMALL SCREEN ADAPTOR
	if (screen.width < 600){
		$("footer h5").hide();
		$("footer a i").removeClass("right");
		$(".container").addClass("center-align");
		$("#navbar_pin").removeClass("navbar-fixed");
	}
	else {
		$("footer h5").show();
		$(".container").removeClass("center-align");
		$("footer a i").addClass("right");
		$("#navbar_pin").addClass("navbar-fixed");
	}
	
  });
})(jQuery);