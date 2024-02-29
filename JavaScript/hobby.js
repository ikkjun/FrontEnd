window.onload = function() {
  var whole = document.getElementById('whole');
  var hobby = document.getElementsByName('hobby');
  var text = document.getElementById('text');
  var basket = document.getElementById('basket');
  var volley = document.getElementById('volley');
  var soccer = document.getElementById('soccer');
  var baseball = document.getElementById('baseball');
  
  // 체크된 항목들의 값을 담을 배열
  var hobbies = [];

  // "전체" 체크박스를 클릭했을 때, 모든 취미 항목을 선택 또는 해제
  whole.onclick = function() {
    for (var i = 0; i < hobby.length; i++) {
      hobby[i].checked = whole.checked;
      if (whole.checked) {
        if (!hobbies.includes(hobby[i].value)) {
          hobbies.push(hobby[i].value);
        }
      } else {
        if (hobbies.includes(hobby[i].value)) {
          var index = hobbies.indexOf(hobby[i].value);
          hobbies.splice(index, 1);
        }
      }
    }
    // textarea 업데이트
    text.value = hobbies.join(", ");
  };

  // 개별 취미 체크박스를 클릭했을 때, 해당 항목을 배열에 추가 또는 제거
  for (var i = 0; i < hobby.length; i++) {
    hobby[i].onclick = function() {
      if (this.checked) {
        hobbies.push(this.value);
      } else {
        var index = hobbies.indexOf(this.value);
        hobbies.splice(index, 1);
      }
      // textarea 업데이트
      text.value = hobbies.join(", ");
    };
  }
}