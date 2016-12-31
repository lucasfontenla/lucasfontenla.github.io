(function($){
  $(function(){

  	$('div.progress').hide();

  	//SIDE NAV
	$('.button-collapse').sideNav();

	//SMALL SCREEN ADAPTOR
	if (screen.width < 600){
		$("header #navbar_pin").removeClass("navbar-fixed");
		$("a.brand-logo").removeClass("left");
		$("a.brand-logo").addClass("center");	
	}
	else {
		$("header #navbar_pin").addClass("navbar-fixed");
	}

	//FORM UPDATE
	Materialize.updateTextFields();

	$("#button_send").click(function(){
		
		var answersDir = $("input");
		answersDir.push($("textarea")[0]);
		var allAnswers = [];
		var classes = [];

		for(var i = 0; i < answersDir.length; i++){
			dir = answersDir[i];
			var value = $(dir).val();
			var inputClass = $(dir).attr('class').split(" ")[0];
			classes.push(inputClass);

			if(value === ""){
				$(dir).addClass('invalid');
				$('label.' + inputClass).addClass('active');
			}
			else {
				if(inputClass != 'email'){
					$(dir).removeClass('invalid');
					$('label' + inputClass).addClass('active');
					allAnswers.push($(dir).val());
				}
				else {
					var theClass = $(dir).attr('class').split(" ");
					if(theClass[theClass.length-1] === 'valid'){
						allAnswers.push($(dir).val());
					}
				}
			}

		}

		function CleanAll(list){
			for(var i = 0; i < list.length; i++){
				$('.'+list[i]).val("");
				$('.'+list[i]).removeClass('valid');
				$('label.'+list[i]).removeClass('active');
			}
		}

		if(allAnswers.length === 4){
			$('div.progress').show();
			$('button.btn').addClass('disabled');
			emailjs.send("gmail","lcfgithubio",{"nome": allAnswers[0], "sobrenome":allAnswers[1], "email":allAnswers[2], "mensagem":allAnswers[3]})
			.then(function(response) {
			   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
			   $('div.progress').hide();
			   Materialize.toast('E-mail enviado com sucesso!', 4000);
			   CleanAll(classes);
				$('button.btn').removeClass('disabled');
			}, function(err) {
			   console.log("FAILED. error=", err);
			   $('div.progress').hide();
			   Materialize.toast('Erro no envio! Checar a conexão com a internet e recarregar a página', 4000);
				$('button.btn').removeClass('disabled');
			});
		}

	});

  });
})(jQuery);