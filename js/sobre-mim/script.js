(function($){
  $(function(){
  	//$("body").addClass("#263238 blue-grey darken-4");

  	$("header").hide();
  	$("footer").hide();
  	$("main").hide();

  	/*$("header, main, footer").fadeIn(1000);, function(){
  		$("body").removeClass("#263238 blue-grey darken-4");
  	});*/

  	//SIDE NAV
	$('.button-collapse').sideNav();

	//PROFILE PICTURE CHANGE
	if (screen.width > 800){
		$("#profile_picture").hover(
			function(){
				$("#profile_picture").attr("src", "imgs/profile_picture_kid.jpg");
			},
			function(){
				$("#profile_picture").attr("src", "imgs/profile_picture.jpg");
		});
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

	$("a.sobre-mim").click(function(){
		$("html").fadeOut(500, function(){
			window.location.href = "sobre-mim.html";
		});
	});
  });
})(jQuery);