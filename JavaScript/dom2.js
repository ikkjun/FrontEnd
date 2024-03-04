window.onload = function() {
  var h1 = document.createElement('h1');
  var txtNode = document.createTextNode('Hello');

  h1.appendChild(txtNode);
  document.body.appendChild(h1);
}