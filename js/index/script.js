(function($){
  $(function(){
  	//$("body").addClass("#263238 blue-grey darken-4");

  	document.getElementById("body").style.visibility = "visible";
  	$("header, footer, main").hide();

	var simulateSobreClick = sessionStorage.goToSobre;

  	if(simulateSobreClick == 'true'){
  		$("header, main, footer").fadeIn(750);  
  		$("div.home").hide();
  		$('li.home').removeClass('active');
		$('li.sobre-mim').addClass('active');

		if(screen.width < 600){
			$('div.sobre h1.header').css({"font-size":"230%", "margin":"0", "margin-top":"3%"});
		}
		else {
			$('div.sobre h1.header').css({"font-size":"270%", "margin":"0", "margin-top":"3%"});
		}
  	}
  	else {
	  	$("header, main, footer").fadeIn(750);
	  	$("div.sobre, li.home-btn").hide();
	 }

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
		if(!$("a.sobre-mim").hasClass("active")){
			$('.button-collapse').sideNav('hide');
			$("main div.home").fadeOut(600, function(){
				//window.location.href = "sobre-mim.html";
				$("div.sobre, li.home-btn").fadeIn(600);

				if(screen.width < 600){
					$('div.sobre h1.header').css({"font-size":"230%", "margin":"0", "margin-top":"3%"});
				}
				else {
					$('div.sobre h1.header').css({"font-size":"270%", "margin":"0", "margin-top":"3%"});
				}

				$('li.home').removeClass('active');
				$('li.sobre-mim').addClass('active');
			});
		}
	});

	$("a.home").click(function(){
		if($("li.sobre-mim").hasClass("active")){
			$('.button-collapse').sideNav('hide');
			$("main div.sobre, li.home-btn").fadeOut(600, function(){
				//window.location.href = "sobre-mim.html";
				$("div.home").fadeIn(600);

				$('li.sobre-mim').removeClass('active');
				$("li.home").addClass('active');
			});
		}
	});

	var NavMainHeight = $("div.nav-main").height();
	var windowHeight = window.innerHeight;
	var NavExtraHeight = $("div.nav-extra").height();

	var addMarginNavExtra = windowHeight - NavExtraHeight - NavMainHeight - 20;

	$("div.nav-extra").css({"margin-top":(String(addMarginNavExtra)+"px")});

	var Hand = localStorage.getItem("Hand");
	if((Hand == null) || (Hand == 'right')){
		$('.button-collapse').sideNav({edge:'right'});
		$("input.switch").prop('checked', false);	
		$('a.button-collapse').removeClass('left').addClass('right');
	}
	else if(Hand == 'left'){
		$('.button-collapse').sideNav({edge:'left'});
		$("input.switch").prop('checked', true);
		$('a.button-collapse').removeClass('right').addClass('left');
	}

	$("input.switch").click(function(){
		var switchValue = $("input.switch").prop('checked');
		if(switchValue){
			localStorage.setItem("Hand", 'left');
		}
		else {
			localStorage.setItem("Hand", 'right');
		}

		window.setTimeout('location.reload()', 1);
	});

  });
})(jQuery);