(function($){
  $(function(){

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

	if (screen.width < 600){
		$("footer h5").hide();
		$("footer a i").removeClass("right");
		$(".container").addClass("center-align");
	}
	else {
		$("footer h5").show();
		$(".container").removeClass("center-align");
		$("footer a i").addClass("right");
	}
  });
})(jQuery);