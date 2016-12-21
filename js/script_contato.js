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

	//FORM UPDATE
	Materialize.updateTextFields();

  });
})(jQuery);