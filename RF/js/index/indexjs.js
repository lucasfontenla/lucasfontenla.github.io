(function($){
  $(function(){
  	$("div.second").hide();

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
				$("nav").css({"background-image":"linear-gradient(#263238, #263238)"});
			});
		}

		else if(scrollPos <= scrollLimit){
			$('div.second').fadeOut(150, function(){
				$('div.first').fadeIn(150);
				if(screen.width > 600){
					$("nav").css({"background-image":"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,.5), rgba(0,0,0,.2))"});
				}
				else {
					$("nav").css({"background-image":"linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.75), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0))"});
				}		
			});
		}
	});

	var screenHeight = window.innerHeight;
	var imageHeight = $("div.parallax-container.index").height();
	var firstSectionHeight = screenHeight - imageHeight;

	$("div.section.first").css({"height":(String(firstSectionHeight)+"px")});

  });
})(jQuery);