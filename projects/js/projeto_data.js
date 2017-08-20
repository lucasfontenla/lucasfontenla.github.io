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

  		var sections = ['class', 'title', 'images', 'content', 'people', "related"];
  		var text_dict = {};
  		for (var i = 0; i < sections.length; i++) {
  			text_dict[sections[i]] = this_proj_text[i];
  		}
  		return text_dict;
  	}

  	function writeHTML(text){
  		var title = text['title'];
  		var content = text['content'];

  		codeHTML =  `
  		<h1 class="header thin white-text"><mark class="z-depth-3 project-title">` + title + `</mark></h1>
  		         <div class="blue-grey-text text-darken-4">
  		         	<p>` + content + `</p>
  		         </div>`
  		$("div.write-here").append(codeHTML);
  	}

	var file = new XMLHttpRequest();
	file.open("GET", "https://lucasfontenla.github.io/projects/texto_projetos.txt", true);
	file.onload = function (e) {
	  var read_text = file.responseText;
	  proj_text = getTEXT(read_text, sessionStorage.openProject);
	  console.log(proj_text);
	  $("h1 mark.project-title").text(proj_text['title']);
	  $("p.project-content").text(proj_text['content']);
	};

	file.onerror = function (e) {
	  console.error(file.statusText);
	};
	file.send(null);

  });
})(jQuery);