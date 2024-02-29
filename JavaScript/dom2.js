window.onload = function() {
  // h1태그와 text node를 생성
  var h1 = document.createElement('h1');
  var txtNode = document.createTextNode('Hello');

  h1.appendChild(txtNode);
  document.body.appendChild(h1);  // h1태그를 body태그에 추가


}