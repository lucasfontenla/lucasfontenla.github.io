(function($){
  $(function(){

  	//SIDE NAV
	$('.button-collapse').sideNav();
	$(".dropdown-button").dropdown({hover:true});

	//SMALL SCREEN ADAPTOR
	if (screen.width < 600){
		$("header #navbar_pin").removeClass("navbar-fixed");
	}
	else {
		$("header #navbar_pin").addClass("navbar-fixed");
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

	//PROJETOS DE FACULDADE --> SEMESTRE/MATÉRIA --> FILTER

	var reversed = true;

	$("i.new").show();
	$("i.old").hide();

	$("a.deep-orange-text.new").click(function() {
	  if(!reversed) {
	  	$(function() {
		  $.fn.reverse = [].reverse;
		  var x = $('.CHANGE li');
		  $('ul.CHANGE').empty().append(x.reverse());
		});
		$("i.new").show();
		$("i.old").hide();
		reversed = true;
	   }
	});

	$("a.deep-orange-text.old").click(function() {
	  if(reversed) {
	  	$(function() {
		  $.fn.reverse = [].reverse;
		  var x = $('.CHANGE li');
		  $('ul.CHANGE').empty().append(x.reverse());
		});
		$("i.old").show();
		$("i.new").hide();
		reversed = false;
	   }
	});

	
  });
})(jQuery);