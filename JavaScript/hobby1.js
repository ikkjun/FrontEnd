/* input type: checkbox value = 농구
        전체
        농구
        배구
        축구
        야구 

        <text area> 
        농구, 배구 ...
      */ 
        window.onload = function() {
          var whole = document.getElementById('whole');
          var hobby = document.getElementsByName('hobby');
          var text = document.getElementById('text');
          var basket = document.getElementById('basket');
          var volley = document.getElementById('volley');
          var soccer = document.getElementById('soccer');
          var baseball = document.getElementById('baseball');
    
          var hobbies = [];
          // 전체 체크하면 모두 체크되게 하기
          whole.onclick = function() {
            if(whole.checked) {
              for(i=0;i<hobby.length;i++) {
                hobby[i].checked = true;
                hobbies.push(hobby[i].value);
              }
            } else {
              for(i=0;i<hobby.length;i++) {
                hobby[i].checked = false;
                hobbies.pop(hobby[i].value);
              }
            }
            text.innerHTML = hobbies.join(', ');
           }
    
          // 개별 체크하면 배열에 넣기
          for (var i = 0; i < hobby.length; i++) {
            hobby[i].onclick = function() {
              if (this.checked) {
                hobbies.push(this.value);
              } else {
                var index = hobbies.indexOf(this.value);
                hobbies.splice(index, 1);
              }
              // textarea 업데이트
              text.innerHTML = hobbies.join(", ");
            };
          }
          // textarea에 출력
          
          // 체크 해제하면 배열에서 제거
        }