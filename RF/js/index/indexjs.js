(function($){
  $(function(){
  	$("div.second").hide();

  	$(document).ready(function(){
      $('.parallax').parallax();
    });

    var NavHeight = $('nav').height();
    $('div.parallax-container').css({"margin-top":("-"+String(NavHeight)+"px")})

    $(window).on('scroll', function(){
		var scrollPos = $(window).scrollTop();

		if(scrollPos > 550){
			$('div.first').fadeOut(150, function(){
				$('div.second').fadeIn(150);
				$("nav").css({"background-image":"linear-gradient(#263238, #263238)"});
			});
		}

		else if(scrollPos <= 550){
			$('div.second').fadeOut(150, function(){
				$('div.first').fadeIn(150);
				$("nav").css({"background-image":"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,.5), rgba(0,0,0,.2))"});
			});
		}
	});

  });
})(jQuery);