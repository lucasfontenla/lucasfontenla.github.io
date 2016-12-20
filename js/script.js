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
  });
})(jQuery);