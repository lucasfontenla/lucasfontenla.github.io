(function($){
  $(function(){

	if(screen.width > 600) {
		$(".chip").click(function () {
			$('#modal_tags .modal-content ul').empty();
	
			var chipClickedClasses = event.target.className.split(" ");
			var chipClicked = chipClickedClasses[chipClickedClasses.length - 1];
	
			$("#modal_tags h4").text($(".chip." + chipClicked).text());
	
			$(".card.horizontal." + chipClicked).each(function(index) {
				var image = $(this).find('.card-image img').attr('src');
				var title = $(this).find('.card-content p:nth-child(1)').text();
				var link = $(this).find('.card-action a').attr('href');
				var toAppend = `
					<li class="collection-item avatar">
	                	<img src=` + image + ` alt="" class="circle">
	                	<span class="title">`+ title + `</span>
		                <p></p>
	                	<a href=` + link + `>Saiba Mais</a>
		            </li> `;
	
		        $('#modal_tags .modal-content ul').append(toAppend);
			});
	
			$('#modal_tags').modal('open');
	
			//$("#modal_tags img").css({'margin-top':'1%'});
			$("#modal_tags span.title").css({'font-size':'160%'});
			$("li.collection-item.avatar").css({'padding-top':'2%', 'padding-bottom':'2%', 'padding-left':'6%'});
	
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
					var theChip = $(".chip." + tagFromArray).text();
					tags_chips.push(theChip);
					allChipsTag += ("." + tagFromArray);
				}
			}

			$("#modal_show_tags h4").text($("#row_faculdade " + allChipsTag + ' p:nth-child(1)').text());

			var toAppendModal2 = "";

			for(var i = 0; i < tags_chips.length; i++){
				var addNow = `<div class="chip ` + tagsGot[(i+1)] + `">` + tags_chips[i] + `</div>`;
				toAppendModal2 += addNow;
			}

			$('#modal_show_tags .modal-content .write-here').append(toAppendModal2);

			$('#modal_show_tags').modal('open');
			$('#modal_show_tags .chip').show();

			//-----------------------------------------------------

			$(".chip").click(function () {
				$('#modal_show_tags').modal('close');
				$('#modal_tags .modal-content ul').empty();

				var chipClickedClasses = event.target.className.split(" ");
				var chipClicked = chipClickedClasses[chipClickedClasses.length - 1];
				
				$("#modal_tags h4").text($("#modal_show_tags .chip." + chipClicked).text());

				$(".card.horizontal." + chipClicked).each(function(index) {
					var image = $(this).find('.card-image img').attr('src');
					var title = $(this).find('.card-content p:nth-child(1)').text();
					var link = $(this).find('.card-action a').attr('href');
					var toAppend = `
						<li class="collection-item avatar">
		                	<img src=` + image + ` alt="" class="circle">
		                	<span class="title">`+ title + `</span>
			                <p></p>
		                	<a href=` + link + `>Saiba Mais</a>
			            </li> `;

			        $('#modal_tags .modal-content ul').append(toAppend);
				});

				$('#modal_tags').modal('open');

				//$("#modal_tags img").css({'margin-top':'1%'});
				$("#modal_tags span.title").css({'font-size':'160%'});
				$("li.collection-item.avatar").css({'padding-top':'2%', 'padding-bottom':'2%', 'padding-left':'25%'});

			});

		});
	}

  });
})(jQuery);