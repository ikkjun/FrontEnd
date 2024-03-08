# 카드 게임 만들기 개발 일지
## CardGame(ver 1.0.0)
### 추가한 기능
- 뒤집기
- 보이기
- 섞기

### 문제점
사진을 어떻게 순서대로 호출할지

### 해결책
Card 생성자에 index를 지정해서 저장.<br>
호출할 때 index를 호출해서 이미지를 속성으로 지정

## CardGame(ver 2.0.0)
### 추가한 기능
힌트 주기
### 문제점
3개를 오픈한 상태에서 4번째 카드를 선택하면 세 번째, 네 번째 카드를 비교하고 (배열에서 삭제한 뒤) 두 번째와 세 번째 카드를 뒤집는다. 그래서 첫 번째와 네 번째 카드가 뒤집힌 상태로 있다.


### 해결책
1. giveHint 메서드에만 사용될 오픈된 카드만 따로 저장하는 배열 생성.
2. 힌트를 준 뒤에 이미지 태그에 다시 cardClick 이벤트 추가

## CardGame(ver 2.1.0)
### 문제점
틀렸던 카드 조합이 힌트를 누른 뒤에 등장<br>

### 해결책
변경 전
```js
function cardClick(event) {
  // 1. 카드가 앞면인지 확인. 앞면이면 return
  let card = event.target;
  if(isFront(card)) return;
  // 2. 카드 뒤집기
  flip(card);
  // 선택된 카드 배열 선언
  // 처음 클릭한 카드 배열에 추가
  selectedCard.push(card);
  if(selectedCard.length%2 === 0) {
    checkCard(selectedCard[0], selectedCard[1]);
    tmpCardArr.push(card);
  }
}

function checkCard(firstCard, secondCard) {
  let imageArr = Array.from(document.getElementsByTagName("img"));  // 이미지 태그 가져오기
  let answerCount = document.getElementById("answerCount");
  
  let firstCardIndex = imageArr.indexOf(firstCard);
  let secondCardIndex = imageArr.indexOf(secondCard);

  let first = cardArr[firstCardIndex];
  let second = cardArr[secondCardIndex];
  // pattern, number 비교
  if ((first.getPattern() === second.getPattern()) // 패턴 확인
      && (first.getNum() === second.getNum())) {  // 숫자 확인
        // 점수 올라가기
        answerCount.innerHTML = ++answer;
        selectedCard = [];  // 비교한 후에 선택한 카드 초기화

      } else {
        // 다르면 0.5초 뒤에 다시 뒤집기
        setTimeout(() => {
          imageArr[firstCardIndex].setAttribute("src", "back.png");
          imageArr[secondCardIndex].setAttribute("src", "back.png");
        }, 500);
        selectedCard = [];  // 비교한 후에 선택한 카드 초기화

      }
}
```
변경 후
```js
function cardClick(event) {
  // 1. 카드가 앞면인지 확인. 앞면이면 return
  let card = event.target;
  if(isFront(card)) return;
  // 2. 카드 뒤집기
  flip(card);
  // 선택된 카드 배열 선언
  // 처음 클릭한 카드 배열에 추가
  selectedCard.push(card);
  if(selectedCard.length%2 === 0) {
    checkCard(selectedCard[0], selectedCard[1]);
  }
}

function checkCard(firstCard, secondCard) {
  let imageArr = Array.from(document.getElementsByTagName("img"));  // 이미지 태그 가져오기
  let answerCount = document.getElementById("answerCount");
  
  let firstCardIndex = imageArr.indexOf(firstCard);
  let secondCardIndex = imageArr.indexOf(secondCard);
  
  let first = cardArr[firstCardIndex];
  let second = cardArr[secondCardIndex];
  // pattern, number 비교
  if ((first.getPattern() === second.getPattern()) // 패턴 확인
  && (first.getNum() === second.getNum())) {  // 숫자 확인
    // 점수 올라가기
    answerCount.innerHTML = ++answer;
    selectedCard = [];  // 비교한 후에 선택한 카드 초기화
    
    tmpCardArr.push(card);
      } else {
        // 다르면 0.5초 뒤에 다시 뒤집기
        setTimeout(() => {
          imageArr[firstCardIndex].setAttribute("src", "back.png");
          imageArr[secondCardIndex].setAttribute("src", "back.png");
        }, 500);
        selectedCard = [];  // 비교한 후에 선택한 카드 초기화

      }
}
```

두 개의 카드가 패턴과 숫자가 일치하는 경우에만 tmpArr에 추가