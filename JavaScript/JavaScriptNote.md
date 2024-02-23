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

## 1.4 동적 타입
- Javascript에서 변수의 타입은 동적으로 결정된다. 
- 값이 저장되지 않은 변수의 타입과 값은 undefined
- 값이 저장되어야 변수의 타입이 결정된다.
- 다른 타입의 값이 저장되면, 변수의 타입이 바뀐다.

## 호이스팅(hoisting)
변수나 함수의 선언이 해당 범위(scope)에서 최상단으로 옮겨지는 것

## 1.7 형변환(Type Conversion)
- 숫자로 변환할 때 사용하는 함수: Number(), parseInt(), parseFloat(), *1
- 문자열로 변환할 때 사용하는 함수: String()
- boolean으로 변환할 때 사용함수: Boolean(), !!

 # 02
 ## 2.1 연산자(Operators)
 대부분은 Java 연산자와 동일하다. 

 ### ==와 ===(!=, !==)
 ==는 값만 비교하지만, ===는 타입까지 비교한다.
 ===와 달리 ==는 피연산자의 타입을 일치시킨 후 비교한다.

 ## 2.2 toExponential(), toFixed(), toPrecision()
 지정된 소수점 자리수에서 반올림 결과를 문자열로 변환
 