(function($){
  $(function(){
  	$("div.second").hide();
  	$(".button-collapse").sideNav();

  	$(document).ready(function(){
      $('.parallax').parallax();
    });

    var NavHeight = $('nav').height();
    $('div.parallax-container').css({"margin-top":("-"+String(NavHeight)+"px")})

    if(screen.width < 600){
    	var scrollLimit = 400;
    }
    else {
    	var scrollLimit = 500;
    }

    $(window).on('scroll', function(){
		var scrollPos = $(window).scrollTop();

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

		if(screen.width > 600){
			if(scrollPos > 600){
				$("nav ul li:nth-child(1)").addClass("active");
				$("nav ul li:nth-child(2)").removeClass("active");
				$("nav ul li:nth-child(3)").removeClass("active");
			}
			if(scrollPos > 700){
				$("nav ul li:nth-child(2)").addClass("active");
				$("nav ul li:nth-child(1)").removeClass("active");
				$("nav ul li:nth-child(3)").removeClass("active");
			}
			if(scrollPos > 800){
				$("nav ul li:nth-child(3)").addClass("active");
				$("nav ul li:nth-child(1)").removeClass("active");
				$("nav ul li:nth-child(2)").removeClass("active");
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
		}
		
		$('html, body').animate({
	        scrollTop: $("#sobre").offset().top-140
	    }, 1000);
	});

  });
})(jQuery);