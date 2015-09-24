
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
