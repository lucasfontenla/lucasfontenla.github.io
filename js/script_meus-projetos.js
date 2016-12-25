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

	//AUTO BADGES SCRIPT

	var lis = $("#test1 li");
	var lisLenght = lis.length;
	var categories = [];

	for (var i = 0; i < lisLenght; i++){
		var toAdd = ":nth-child(" + String(i+1) + ")";
		toAdd = "#test1 li" + toAdd
		var classNames = $(toAdd).attr("class").toString().split(' ');
		$.each(classNames, function (i, className) {
	    	categories.push(className);
	    });
	}

	var arrayLength = categories.length;
	var title;
	var search;
	var count;

	for (var i = 0; i < arrayLength; i++) {
		title = categories[i];
		
		search = "." + title + " div .col";
		count = $(search).length;
		search = "#test1 " + "." + title + " span";

		if (count === 0) {
			$(search).text("SEM PROJETOS");
		}
		else if (count === 1) {
			$(search).text(count + " PROJETO");
		}
		else {
			$(search).text(count + " PROJETOS");
		}
	}

	var lis = $("#test2 #SEMESTRE li");
	var lisLenght = lis.length;
	var categories = [];
	console.log(lisLenght);
	for (var i = 0; i < lisLenght; i++){
		var toAdd = ":nth-child(" + String(i+1) + ")";
		toAdd = "#test2 #SEMESTRE li" + toAdd
		var classNames = $(toAdd).attr("class").toString().split(' ');
		$.each(classNames, function (i, className) {
	    	categories.push(className);
	    });
	}

	var arrayLength = categories.length;
	var title;
	var search;
	var count;

	for (var i = 0; i < arrayLength; i++) {
		title = categories[i];
		
		search = "." + title + " div .collapsible-header";
		count = $(search).length;
		search = "#test2 ul " + "." + title + " span";

		if (count === 0) {
			$(search).text("SEM PROJETOS");
		}
		else if (count === 1) {
			$(search).text(count + " PROJETO");
		}
		else {
			$(search).text(count + " PROJETOS");
		}
	}
	
  });
})(jQuery);