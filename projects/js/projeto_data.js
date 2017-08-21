(function($){
  $(function(){

	  	function getTEXT(text, proj){
  		var each_proj = text.split("#");
  		var this_proj_text = ""

  		for(var i = 1; i < each_proj.length; i++){
  			if(each_proj[i].split(";")[0] == (proj)){
  				this_proj_text = each_proj[i].split(";");
  				break;
  			}
  		}

  		var sections = ['class', 'title', 'content', 'people'];
  		var text_dict = {};
  		for (var i = 0; i < sections.length; i++) {
  			text_dict[sections[i]] = this_proj_text[i];
  		}
  		return text_dict;
  	}

  	function writeHTML(text){
  		var width = $("div.container.write-here").width();
  		var codeHTML = "";

  		var title = text['title'];
  		codeHTML += `<h1 class="header thin white-text"><mark class="z-depth-3 project-title">` + title + `</mark></h1>`;

  		var images = text['images'].split('!:');
  		for(var i = 0; i < images.lenght; i++){
  			var image = images[i];
  			//insert HTML part here
  		}

  		var content = text['content'];
  		codeHTML += `<div class="blue-grey-text text-darken-4">` + content + `</div>`;

  		//codeHTML += `<img class="responsive-img head-img" src="http://placeimg.com/`+parseInt(width)+`/150">`

  		var people = text['people'].split("!:");
  		for(var i = 0; i < people.lenght; i++){
  			person = people[i];
  			//insert HTML part here
  		}

  		var related = "" //still beta version ;)

  		$("div.container.write-here").append(codeHTML);
  	}

	var file = new XMLHttpRequest();
	file.open("GET", "https://lucasfontenla.github.io/projects/texto_projetos.txt", true);
	file.onload = function (e) {
	  var read_text = file.responseText;
	  proj_text = getTEXT(read_text, sessionStorage.openProject);
	  writeHTML(proj_text);
	};

	file.onerror = function (e) {
	  console.error(file.statusText);
	};
	file.send(null);

  });
})(jQuery);