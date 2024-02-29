window.onload = function() {
  var h1Tag = document.getElementById('header0');
  var h1Tags = document.querySelectorAll('h1');

  h1Tag.innerHTML +='-first';

  for(h1Tag of h1Tags) {
    h1Tag.innerHTML += '-' + 1;
    h1Tag.style.border = '2px solid red';
    h1Tag.style.color = 'orange';
    h1Tag.style.backgroundColor = 'yellow';
  }
}