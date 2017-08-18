path = "https://lucasfontenla.github.io/test/texto.txt";

var file = new XMLHttpRequest();
file.open("GET", path, true);
file.onload = function (e) {
  var read_text = file.responseText
  console.log(read_text);
  a = read_text.split("#");
  console.log(a);
};
file.onerror = function (e) {
  console.error(file.statusText);
};
file.send(null);
