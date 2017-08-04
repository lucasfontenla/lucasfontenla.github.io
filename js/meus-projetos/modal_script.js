(function($){
  $(function(){

	if(screen.width > 600) {
		$(".chip").click(function () {
			$('#modal_tags .modal-content ul').empty();
	
			var chipClickedClasses = event.target.className.split(" ");
			var chipClicked = chipClickedClasses[chipClickedClasses.length - 1];
	
			$("#modal_tags h4").text($(".chip." + chipClicked).first().text());
	
			$(".card.horizontal." + chipClicked).each(function(index) {
				var image = $(this).find('.card-image img').attr('src');
				var title = $(this).find('.card-content p:nth-child(1)').text();
				var link = $(this).find('.card-action a').attr('href');
				var toAppend = `
					<li class="collection-item avatar">
	                	<img src=` + image + ` alt="" class="circle">
	                	<span class="title light" style="font-size:150%">`+ title + `</span>
		                <p></p>
	                	<a class="deep-orange-text light" href=` + link + `>Saiba Mais</a>
		            </li> `;
	
		        $('#modal_tags .modal-content ul').append(toAppend);
			});
	
			$('#modal_tags').modal('open');
	
			//$("#modal_tags img").css({'margin-top':'1%'});
			$("#modal_tags span.title").css({'font-size':'135%'});
			$("li.collection-item.avatar").css({'padding-top':'2%', 'padding-bottom':'2%', 'padding-left':'10%'});
			$("ul.autocomplete-content").css({'margin-top': '.5%', 'margin-left':'2%'});
		});
	}

	//------------------------------------------------------------------------------
	else {
		$(".show_tags").click(function() {
			$('#modal_tags').modal('close');
			$('#modal_show_tags .modal-content div').empty();
			
			var tagsGot = event.target.className.split(" ");
			var tags_chips = [];
			var allChipsTag = "";

			for(var i = 0; i < tagsGot.length; i++){
				var tagFromArray = tagsGot[i];

				if(tagFromArray != 'show_tags'){
					var theChip = $(".chip." + tagFromArray).first().text();
					tags_chips.push(theChip);
					allChipsTag += ("." + tagFromArray);
				}
			}

			$("#modal_show_tags h4").text($("#row_faculdade " + allChipsTag + ' p:nth-child(1)').first().text());

			var toAppendModal2 = "";

			for(var i = 0; i < tags_chips.length; i++){
				var addNow = `<div class="chip left-align ` + tagsGot[(i+1)] + `">` + tags_chips[i] + `</div>`;
				toAppendModal2 += addNow;
			}

			$('#modal_show_tags .modal-content .write-here').append(toAppendModal2);

			$('#modal_show_tags').modal('open');
			
			$('#modal_show_tags .chip').show();
			$("#modal_show_tags .write-here div.chip").css({'margin-bottom':'3%'});

			//-----------------------------------------------------

			$(".chip").click(function () {
				$('#modal_show_tags').modal('close');
				$('#modal_tags .modal-content ul').empty();

				var chipClickedClasses = event.target.className.split(" ");
				var chipClicked = chipClickedClasses[chipClickedClasses.length - 1];
				
				$("#modal_tags h4").text($("#modal_show_tags .chip." + chipClicked).first().text());

				$(".card.horizontal." + chipClicked).each(function(index) {
					var image = $(this).find('.card-image img').attr('src');
					var title = $(this).find('.card-content p:nth-child(1)').text();
					var link = $(this).find('.card-action a').attr('href');
					var toAppend = `
						<li class="collection-item avatar">
		                	<img src=` + image + ` alt="" class="circle">
		                	<span class="title light left-align" style="font-size:135%">`+ title + `</span>
			                <p></p>
		                	<a class="deep-orange-text light left-align" href=` + link + `>Saiba Mais</a>
			            </li> `;

			        $('#modal_tags .modal-content ul').append(toAppend);
				});

				$('#modal_tags').modal('open');

				//$("#modal_tags img").css({'margin-top':'1%'});
				$("#modal_tags span.title").css({'font-size':'100%'});
				$("ul.collection").css({'padding-bottom':'0%'});
				$("ul.autocomplete-content").css({'margin-top': '.5%', 'margin-left':'2%'});

			});

		});
	}

	//------------------------------------------------------------------------------

	var chipsText = [];
	var chipsClasses = [];

	$("#row_faculdade .chip").each(function(index){
		var add = $(this).attr('class').split(" ");

		for(var i = 0; i < add.length; i++){
			var add_ = add[i];
			if(add_ !== "chip"){
				if(chipsClasses.indexOf(add_) == -1){
					chipsClasses.push(add_);
					add_ = $("#row_faculdade .chip." + add_).first().text();
					chipsText.push(add_);
				}
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

		console.log('Searching for: ' + search_tag);

		$(".autocomplete").val('');

		$('#modal_show_tags').modal('close');
		$('#modal_tags .modal-content ul').empty();

		var chipClickedClass = textClass_reference[search_tag];
		var chipClicked = search_tag;

		console.log('Searching Class: ' + chipClickedClass);
		console.log('Text Class: ' + chipClicked);
		
		$("#modal_tags h4").text(chipClicked);

		$(".card.horizontal." + chipClickedClass).each(function(index) {
			var image = $(this).find('.card-image img').attr('src');
			var title = $(this).find('.card-content p:nth-child(1)').text();
			var link = $(this).find('.card-action a').attr('href');
			var toAppend = `
				<li class="collection-item avatar">
                	<img src=` + image + ` alt="" class="circle">
                	<span class="title light" style="font-size:135%">`+ title + `</span>
	                <p></p>
                	<a class="deep-orange-text light" href=` + link + `>Saiba Mais</a>
	            </li> `;    
	        console.log(title);
	        $('#modal_tags .modal-content ul').append(toAppend);
		});

		$('#modal_tags').modal('open');
		$('#modal_tags').modal('reset');
		$("#modal_tags span.title").css({'font-size':'135%'});
		$("ul.collection").css({'padding-bottom':'0%', 'max-height':'65px'});
		$("ul.autocomplete-content").css({'margin-top': '.5%', 'margin-left':'2%'});
	});


  });
})(jQuery);