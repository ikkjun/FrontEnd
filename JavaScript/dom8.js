window.onload = function() {
  var h = document.getElementById('h');

  // 이벤트 처리기 등록
  if(h.attachEvent) {
    var handler = function() {
      alert('clicked - IE');
      window.event.srcElement.style.color = 'red';
      window.detachEvent('onclick', handler);
    };
    h.attachEvent('onclick', handler);
  } else {
    var handler = function() {
      alert('clicked - not IE');
      this.style.color = 'red';
      this.removeEventListener('click', handler);
    };
    h.addEventListener('click', handler);
  }
}