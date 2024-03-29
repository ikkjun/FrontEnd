# 45장 프로미스
## 정의
프로미스란 해야 될 작업, 상태, 결과 값을 갖고 있는 객체이다.
## 사용하는 이유
1. 중첩 구조를 직렬구조로 전환
2. 에러 처리를 쉽게 하기 위해
## 비동기 처리를 위한 콜백 패턴의 단점
비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료된다.

콜백 헬(callback hell): 콜백 함수를 통해 비동기 처리 결과에 대한 후속 처리를 수행하는 비동기 함수가 비동기 처리 결과를 가지고 또 다시 비동기 함수를 호출해야 한다면 콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상이 발생하는 것이다.

생성된 직후의 프로미스는 기본적으로 pending상태이다. 이후 비동기 처리의 겨로가에 따라 프로미스의 상태가 변경된다.
- 비동기 처리 성공: resolve 함수를 호출해 프로미스를 fulfilled 상태로 변경한다.
- 비동기 처리 실패: reject 함수를 호출해 프로미스를 rejected 상태로 변경한다.
이처럼 프로미스의 상태는 resolve 또는 reject 함수를 호출하는 것으로 결정된다.

따라서 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체이다.

## 타입이란★
기본형과 참조형이다. 기본형이란 값 1개 또는 값 자체를 의미한다. 참조형은 값을 0개 ~ 여러 개를 가질 수 있다. 0개인 이유는 Serializable 인터페이스나 Cloneable 인터페이스처럼 멤버의 개수가 0개인 인터페이스가 있기 때문이다.

## 프로미스의 후속 처리 메서드
### Promise.prototype.then
then 메서드는 두 개의 콜백 함수를 인수로 전달받는다.
첫 번째 콜백 함수는 비동기 처리가 성공했을 때 호출되는 성공 처리 콜백 함수이며, 두 번째 콜백 함수는 비동기 처리가 실패했을 때 호출되는 실패 처리 콜백 함수이다.

## 프로미스 체이닝
콜백 패턴은 가독성이 좋지 않다.
이 문제는 async/await을 통해 해결할 수 있다. async/await을 사용하면 프로미스의 후속 처리 메서드 없이 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.

## 마이크로태스크 큐
콜백 함수나 이벤트 핸들러를 일시 저장한다는 점에서 태스크 큐와 동일하지만 마이크로태스크 큐는 태스크 큐보다 우선순위가 높다.

## fetch
fetch 함수는 HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다. fetch함수가 반환하는 프로미스는 기본적으로 404 Not Found나 500 Internal Server Error와 같은 HTTP 에러가 발생해도 에러를 reject하지 않고 불리언 타입의 ok 상태를 false로 설정한 Response객체를 resolve한다.