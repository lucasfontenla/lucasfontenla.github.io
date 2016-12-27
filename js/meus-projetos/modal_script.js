(function($){
  $(function(){

	$(".chip").click(function() {
		$('#modal_tags .modal-content ul').empty();

		var chipClickedClasses = event.target.className.split(" ");
		var chipClicked = chipClickedClasses[chipClickedClasses.length - 1];

		$("#modal_tags h4").text($(".chip." + chipClicked).text());

		$(".card.horizontal." + chipClicked).each(function(index) {
			var image = $(this).find('.card-image img').attr('src');
			var title = $(this).find('.card-content p').text();
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

  });
})(jQuery);