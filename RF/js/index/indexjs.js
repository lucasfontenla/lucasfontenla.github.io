(function($){
  $(function(){
  	$(window).scrollTop(0);
  	$("div.second, i.play-icon").hide();
  	$(".button-collapse").sideNav();
  	$(".dropdown-button").dropdown({hover:true, constrainWidth:false});
  	$(".dropdown-button2").dropdown({hover:true, constrainWidth:false});
    $('.carousel').carousel({dist:-15, noWrap:true});
    $('.materialboxed').materialbox();
    $('.slider').slider({height:450, indicators:false, interval:5000});
    $('#modal1').modal();
    $('#modal-mobile').modal();

  	//LANGUAGE CHOOSE
  	$(".esp, .eng, div#modal-mobile li.portChoose").hide();
  	$("li.portChoose").addClass("active");

  	$("li.engChoose").click(function(){
  		$("#modal-mobile").modal('close');
  		$("#nav-mobile").sideNav('hide');
  		$(".esp, .pt, div#modal-mobile li.engChoose").hide();
  		$(".eng, div#modal-mobile li.espChoose, div#modal-mobile li.portChoose").show();
  		$("li.portChoose, li.espChoose").removeClass("active");
  		$("li.engChoose").addClass("active");
  		$(".dropdown-button").dropdown('close');
  		$("a.sobreClick").text('ABOUT');
  		$("a.atuacaoClick").text('ACTING');
  		$("a.contatoClick").text('CONTACT');
  	});

  	$("li.portChoose").click(function(){
  		$("#modal-mobile").modal('close');
  		$("#nav-mobile").sideNav('hide');
  		$(".esp, .eng, disv#modal-mobile li.portChoose").hide();
  		$(".pt, div#modal-mobile li.espChoose, div#modal-mobile li.engChoose").show();
  		$("li.engChoose, li.espChoose").removeClass("active");
  		$("li.portChoose").addClass("active");
  		$(".dropdown-button").dropdown('close');
  		$("a.sobreClick").text('SOBRE');
  		$("a.atuacaoClick").text('ATUAÇÃO');
  		$("a.contatoClick").text('CONTATO');
  	});

  	$("li.espChoose").click(function(){
  		$("#modal-mobile").modal('close');
  		$("#nav-mobile").sideNav('hide');
  		$(".eng, .pt, div#modal-mobile li.espChoose").hide();
  		$(".esp, div#modal-mobile li.engChoose, div#modal-mobile li.portChoose").show();
  		$("li.portChoose, li.engChoose").removeClass("active");
  		$("li.espChoose").addClass("active");
  		$(".dropdown-button").dropdown('close');
  		$("a.sobreClick").text('SOBRE');
  		$("a.atuacaoClick").text('ATUACIÓN');
  		$("a.contatoClick").text('CONTACTO');
  	});


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
			$("li.here:nth-child(1)").addClass("active");
			$("li.here:nth-child(2)").removeClass("active");
			$("li.here:nth-child(3)").removeClass("active");
			$("ul#nav-mobile li:nth-child(3)").addClass("active");
			$("ul#nav-mobile li:nth-child(4)").removeClass("active");
			$("ul#nav-mobile li:nth-child(5)").removeClass("active");
			$("div.second nav").css({"background-image": "linear-gradient(#b71c1c, #b71c1c)"});
		}
		if(scrollPos >= 1800){
			$("li.here:nth-child(2)").addClass("active");
			$("li.here:nth-child(1)").removeClass("active");
			$("li.here:nth-child(3)").removeClass("active");
			$("ul#nav-mobile li:nth-child(4)").addClass("active");
			$("ul#nav-mobile li:nth-child(3)").removeClass("active");
			$("ul#nav-mobile li:nth-child(5)").removeClass("active");
			if(screen.width > 900){
				$("div.second nav").css({"background-image": "linear-gradient(#263238, #263238)"});
			}
		}
		if(scrollPos > 2700){
			$("li.here:nth-child(3)").addClass("active");
			$("li.here:nth-child(1)").removeClass("active");
			$("li.here:nth-child(2)").removeClass("active");
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
		        scrollTop: $("#sobre").offset().top-40
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

	$(".brand-logo, img.logo").click(function(){
		if(screen.width < 600){
			$('.button-collapse').sideNav('hide');
		}
		
		$('html, body').animate({
	        scrollTop: 0
	    }, 600);
	});

	$("a#prev").click(function(){
		$('.slider').slider('prev');
	});

	$("a#next").click(function(){
		$('.slider').slider('next');
	});

	var playing = true;

	$("a#paused").click(function(){
		if(playing){
			$("i.pause-icon").hide();
			$("i.play-icon").show()
			$("a#paused").prop('id', 'playing');
			$(".slider").slider('pause');
			playing = false;
		}
		else {
			$("i.pause-icon").show();
			$("i.play-icon").hide()
			$("a#playing").prop('id', 'paused');
			$(".slider").slider('start');
			playing = true;
		}
	});

	$("a#parceiros-modal").click(function(){
		$('#modal1').modal('open');
	});

	$("#nav-mobile .languageChange").click(function(){
		$("#modal-mobile").modal('open');
	});

	if(window.innerHeight < 600){
		$(".parallax-container").css({"height": "380px"});
		$("div.first-section h5").css({"font-size": "125%"});
		$("div.second img.logo").css({"margin-top": "4%", "margin-left": "0%"});
		$("div.second a.brand-logo").css({"margin-left": "10%"});
	}

  });
})(jQuery);