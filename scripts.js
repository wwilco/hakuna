
for(var i = 0; i < 2; i++) {
  var td = document.getElementById('tdButton');
  var button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('class', 'btn btn-xs btn-success');
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', 'add'[i]);
  td.appendChild(button);
}


var btn = document.getElementsByClassName('btn')
btn.setAttribute("data-target", "add"[i]);


var addbt = document.getElementById('add');
addbt.setAttribute('id', 'add'[i]);

var h1 = document.getElementsByTagName("H1")[0];
var att = document.createAttribute("class");
att.value = "democlass";
h1.setAttributeNode(att);


document.querySelector('input[name="car"]:checked').value;
