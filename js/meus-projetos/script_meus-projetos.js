(function($){
  $(function(){

  	document.getElementById("body").style.visibility = "visible";
	sessionStorage.setItem("goToSobre", false);

  	$("body").hide();

  	$("body").fadeIn(1000);

  	//----------------------------------------------------

  	$('.modal').modal();
  	$('div.card-content p:nth-child(1)').addClass('thin');
  	$('#row_pessoais p.hvb').removeClass('thin');

  	//SIDE NAV
	$(".dropdown-button").dropdown({hover:true});
	$('ul.tabs').tabs();
	$('ul.tabs').tabs('select_tab', 'tab_id');

	//SMALL SCREEN ADAPTOR
	if (screen.width < 600){
		$("header #navbar_pin").removeClass("navbar-fixed");
		$('p').addClass('left-align');
	}
	else {
		$("header #navbar_pin").addClass("navbar-fixed");
	}
	
	//SMALL SCREEN ADAPTOR
	if (screen.width < 600){
		$("a.brand-logo").removeClass("left");
		$("a.brand-logo").addClass("center");	
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

	//TOP 5
	if (screen.width < 600) {
		$(".card span").addClass("left-align");
		$("#row_top5 p").addClass("left-align");
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

	if (screen.width < 600) {
		$("#test1 .card-content p:nth-child(2)").hide();
		$(".dropdown-button").dropdown({hover:false});
		$('#row_faculdade .card-image img').hide();
		$('#row_faculdade .card-action a:nth-child(2)').show();
		$('#row_faculdade .chip').hide();
		$('#row_faculdade .card-content p').addClass('left-align');
		$('#row_faculdade div.collapsible-header').addClass('left-align');

		$('#row_pessoais .hvb-card span').text('Robótica');
	}
	else {
		$('#row_faculdade .card-action a:nth-child(2)').hide()
	}

	//AUTO BADGES SCRIPT

	var lis = $("#Faculdade li");
	var lisLenght = lis.length;
	var categories = [];

	for (var i = 0; i < lisLenght; i++){
		var toAdd = ":nth-child(" + String(i+1) + ")";
		toAdd = "#Faculdade li" + toAdd
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
		search = "#Faculdade " + "." + title + " span";

		if(screen.width < 600){
			if (count === 0) {
				$(search).text("N/A");
			}
			else {
				$(search).text(count);
			}

		}
		else {
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
	}

	//SOBRE MIM ---------------------------------------------------------------------
	$("a.sobre-mim").click(function(){
		$('.button-collapse').sideNav('hide');
		sessionStorage.setItem("goToSobre", true);
		window.location.href = "index.html"
	});

	//-------------------------------------------------------------------------------

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