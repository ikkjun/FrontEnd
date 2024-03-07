window.onload = function() {
  var h1Tag = document.getElementById('header0');
  var h1Tags = document.querySelectorAll('h1');

  h1Tag.innerHTML += '- first';

  for(i=0;i<h1Tags.length;i++) {
    h1Tags[i].innerHTML += '-' + i;
    h1Tags[i].style.border = '2px solid red';
    h1Tags[i].style.color = 'orange';
    h1Tags[i].style.backgroundColor = 'yellow';
  }
}