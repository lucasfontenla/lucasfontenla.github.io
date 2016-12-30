(function($){
  $(function(){

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

		for(var i = 0; i < answersDir.length; i++){
			dir = answersDir[i];
			var value = $(dir).val();
			var inputClass = $(dir).attr('class').split(" ")[0];

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

	});

  });
})(jQuery);