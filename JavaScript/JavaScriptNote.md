# 01
## 1.1 JavaScript의 역사
- JavaScript는 1005년에 Brendan Eich가 발명.
- EC(유럽 연합)MA가 표준화
- ECMA5, 6이 주로 사용됨

## 1.2 출력과 입력
- window.alert(출력할 내용) - 브라우저의 경고창에 출력
- console.log(출력할 내용) - 브라우저의 콘솔에 출력
- document.log(출력할 내용) - HTML페이지에 출력 → 기존의 문서를 덮어쓰는 것이기 때문에 자주 쓰지 않는다.
- 태그이름.innerHTML = 출력할 내용 - HTML페이지의 내용 변경
- 태그이름.textContent = 출력할 내용 - HTML페이지의 태그 내용 변경(innerHTML과 달리  태그를 문자열로 인식)
<h1>Hello</h1>
- <h1>: 시작태그
- Hello: innerHTML
- </h1>: 끝태그
- <h1>Hello</h1>: outerHTML

int x; 의 의미
1. 변수 선언
2. 타입 정보

참고) kotlin:
var x: Int b 
값을 줄 때는 생략 가능하다.
왜냐하면 변경에 유리하게 하려고