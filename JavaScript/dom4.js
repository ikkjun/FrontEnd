function validCheck() {
  var userId = document.getElementById('userId').value;

  if (userId.length >= 3 && userId.length < 8) {
    // 사용자 입력이 조건에 맞는 경우에는 아무런 조치를 취하지 않습니다.
    return true;
  } else {
    // 사용자 입력이 조건에 맞지 않는 경우에는 userId를 빈 문자열로 초기화하고 알림을 표시합니다.
    document.getElementById('userId').value = '';
    alert("id의 길이는 3자 이상 8자 미만이어야 합니다.");
    return false;
  }
}
