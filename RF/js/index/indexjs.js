(function($){
  $(function(){
  	$(window).scrollTop(0);
  	$("div.second").hide();
  	$(".button-collapse").sideNav();

  	$(document).ready(function(){
      $('.parallax').parallax();
    });

    var NavHeight = $('nav').height();
    $('div.parallax-container').css({"margin-top":("-"+String(NavHeight)+"px")})

    if(screen.width < 600){
    	var scrollLimit = 400;
    	$("div#sobre p").addClass("center");
    	$("div.news").hide();
    }
    else {
    	var scrollLimit = 500;
    }

    $(window).on('scroll', function(){
		var scrollPos = $(window).scrollTop();

		console.log(scrollPos);

		if(scrollPos > scrollLimit){
			$('div.first').fadeOut(150, function(){
				$('div.second').fadeIn(150);
			});
		}

		else if(scrollPos <= scrollLimit){
			$('div.second').fadeOut(150, function(){
				$('div.first').fadeIn(150);
			});
		}

		if(scrollPos >= 600){
			$("nav ul li:nth-child(1)").addClass("active");
			$("nav ul li:nth-child(2)").removeClass("active");
			$("nav ul li:nth-child(3)").removeClass("active");
			$("ul#nav-mobile li:nth-child(3)").addClass("active");
			$("ul#nav-mobile li:nth-child(4)").removeClass("active");
			$("ul#nav-mobile li:nth-child(5)").removeClass("active");
			$("div.second nav").css({"background-image": "linear-gradient(#b71c1c, #b71c1c)"});
		}
		if(scrollPos >= 1300){
			$("nav ul li:nth-child(2)").addClass("active");
			$("nav ul li:nth-child(1)").removeClass("active");
			$("nav ul li:nth-child(3)").removeClass("active");
			$("ul#nav-mobile li:nth-child(4)").addClass("active");
			$("ul#nav-mobile li:nth-child(3)").removeClass("active");
			$("ul#nav-mobile li:nth-child(5)").removeClass("active");
			if(screen.width > 900){
				$("div.second nav").css({"background-image": "linear-gradient(#263238, #263238)"});
			}
		}
		if(scrollPos > 2000){
			$("nav ul li:nth-child(3)").addClass("active");
			$("nav ul li:nth-child(1)").removeClass("active");
			$("nav ul li:nth-child(2)").removeClass("active");
			$("ul#nav-mobile li:nth-child(5)").addClass("active");
			$("ul#nav-mobile li:nth-child(4)").removeClass("active");
			$("ul#nav-mobile li:nth-child(3)").removeClass("active");
			if(screen.width > 900){
				$("div.second nav").css({"background-image": "linear-gradient(#263238, #263238)"});
			}
		}
	});

	var screenHeight = window.innerHeight;
	var imageHeight = $("div.parallax-container.index").height();
	var firstSectionHeight = screenHeight - imageHeight;

	$("div.section.first-section").css({"height":(String(firstSectionHeight)+"px")});

	if(screen.width < 600){
		var IconsMargin = (screen.width - $("i.business").width())/2;
		$("i.business").css({"margin-left":(String(IconsMargin-25)+"px")});
	}

	$("a.sobreClick").click(function(){
		if(screen.width < 600){
			$('.button-collapse').sideNav('hide');
			$('html, body').animate({
		        scrollTop: $("#sobre").offset().top-40
		    }, 600);
		}
		else {
			$('html, body').animate({
		        scrollTop: $("#sobre").offset().top-140
		    }, 600);
		}
	});

	$("a.atuacaoClick").click(function(){
		if(screen.width < 600){
			$('.button-collapse').sideNav('hide');
			$('html, body').animate({
		        scrollTop: $("#atuacao").offset().top-40
		    }, 600);
		}
		else {
			$('html, body').animate({
		        scrollTop: $("#atuacao").offset().top-(NavHeight-20)
		    }, 600);
		}
	});

	$("a.contatoClick").click(function(){
		if(screen.width < 600){
			$('.button-collapse').sideNav('hide');
		}
		
		$('html, body').animate({
	        scrollTop: $("#contato").offset().top-140
	    }, 600);
	});

  });
})(jQuery);