(function($){
  $(function(){

  	//SIDE NAV
	$('.button-collapse').sideNav();

	//SMALL SCREEN ADAPTOR
	if (screen.width < 600){
		$("#navbar_pin").removeClass("navbar-fixed");
	}
	else {
		$("#navbar_pin").addClass("navbar-fixed");
	}

  });
})(jQuery);