# 49장 Babel과 Webpack을 이용한 ES6+/ES.NEXT 개발 환경 구축
## Babel
Babel이란 ES6 사양의 소스 코드를 ES5 사양의 소스코드로 트랜스파일링 하는 것이다.
## Webpack
Webpack은 의존 관계에 있는 자바스크립트, CSS, 이미지 등의 리소스들을 하나(또는 여러 개)의 파일로 번들링하는 모듈 번들러다. Webpack을 사용하면 의존 모듈이 하나의 파일로 번들링되므로 별도의 모듈 로더가 필요 없다.
## babel-polyfill
Promise, Object.assign, Array.from 등과 같이 ES5 사양으로 대체할 수 없는 기능은 트랜스파일링 되지 않는다. 따라서 IE 같은 구형 브라우저에서도 Promise, Object.assign, Array.from 등과 같은 객체나 메서드를 사용하려면 babel/polyfill을 이용해야 한다.