(function($){
  $(function(){

  	$('.modal').modal();
  	$('div.card-content p:nth-child(1)').addClass('thin');

  	//SIDE NAV
	$('.button-collapse').sideNav();
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

	//-------------------------------------------------------------------------------

	var chipsText = [];
	var chipsClasses = [];

	$("#row_faculdade .chip").each(function(index){
		var add = $(this).attr('class').split(" ");

		for(var i = 0; i < add.length; i++){
			var add_ = add[i];
			if(add_ !== "chip"){
				chipsClasses.push(add_);
				add_ = $("#row_faculdade .chip." + add_).text();
				chipsText.push(add_);
			}
		}
	});

	var autocomplete_string = '{';
	var autocomplete_dict;
	var textClass_reference = {};

	for(var i = 0; i < chipsText.length; i++){
		textClass_reference[chipsText[i]] = chipsClasses[i];
		if(i !== (chipsText.length - 1)){
			autocomplete_string += ('"' + chipsText[i] + '":null, ');
		}
		else {
			autocomplete_string += ('"' + chipsText[i] + '":null');
		}
	}

	autocomplete_string += "}";
	autocomplete_dict = JSON.parse(autocomplete_string);

	$('input.autocomplete').autocomplete({
	    data: autocomplete_dict
	});

	$('ul.autocomplete-content.dropdown-content').click(function(){
		var search_tag = $('.autocomplete').val();

		$('#modal_show_tags').modal('close');
		$('#modal_tags .modal-content ul').empty();

		var chipClickedClass = textClass_reference[search_tag];
		var chipClicked = search_tag;
		
		$("#modal_tags h4").text(chipClicked);

		$(".card.horizontal." + chipClickedClass).each(function(index) {
			var image = $(this).find('.card-image img').attr('src');
			var title = $(this).find('.card-content p:nth-child(1)').text();
			var link = $(this).find('.card-action a').attr('href');
			var toAppend = `
				<li class="collection-item avatar">
                	<img src=` + image + ` alt="" class="circle">
                	<span class="title thin">`+ title + `</span>
	                <p></p>
                	<a href=` + link + `>Saiba Mais</a>
	            </li> `;

	        $('#modal_tags .modal-content ul').append(toAppend);
		});

		$('#modal_tags').modal('open');

		$("#modal_tags span.title").css({'font-size':'160%'});
		$("ul.collection").css({'padding-bottom':'0%', 'max-height':'65px'});
	});

  });
})(jQuery);