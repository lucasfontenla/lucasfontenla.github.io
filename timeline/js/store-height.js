(function($){
  $(function(){

	var body = document.body;
	var html = document.documentElement;

	var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  	localStorage.setItem('iframe_index', (height));

  });
})(jQuery);