// 이벤트 전파를 막는다.
window.onload = function() {
  document.getElementById('btn').onclick = function(e) {
    var event = e || window.event;

    alert('4-button');

    // 이벤트 전달을 제거
    event.stopPropagation();
  }
}