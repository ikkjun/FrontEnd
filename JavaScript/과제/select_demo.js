var arr = ['야구', '축구', '농구', '배구'];

var sel1 = document.getElementById('sel1');
var sel2 = document.getElementById('sel2');

window.onload = function() {
  // 1. 참조 얻기
  var ops = document.getElementsByTagName('option')
  var button = document.getElementsByTagName('button');
  var toRight = document.querySelector('#toRight');
  var toLeft = document.querySelector('#toLeft');
  var AlltoRight = document.querySelector('#AlltoRight');
  var AlltoLeft = document.querySelector('#AlltoLeft');

  for(sport of arr) {
    var sp = document.createTextNode(sport);
    var op = document.createElement('option');
    op.appendChild(sp);
    sel1.appendChild(op);
  }

  // 2. 이벤트 추가
  toRight.addEventListener('click', moveLefttoRight);
  toLeft.addEventListener('click', moveRighttoLeft);
  AlltoRight.addEventListener('click', moveAllLefttoRight);
  AlltoLeft.addEventListener('click', moveAllRighttoLeft);
}

// 1. 개별 선택
  // 1-1. 왼쪽에서 오른쪽으로 옮긴다.
  function moveLefttoRight() {
    moveSelected(sel1,sel2);
  }
  // 1-2. 오른쪽에서 왼쪽으로 옮긴다.
  function moveRighttoLeft() {
    moveSelected(sel2,sel1);
  }
// 2. 전체 선택
  // 2.1 왼쪽에서 오른쪽으로 옮긴다.
  function moveAllLefttoRight() {
    selectAll();
    moveSelected(sel1,sel2);
  }
  // 2.2 오른쪽에서 왼쪽으로 옮긴다.
  function moveAllRighttoLeft() {
    selectAll();
    moveSelected(sel2,sel1);
  }

function moveSelected(from, to) {
  let ops = from.getElementsByTagName('option')
  // 체크되어 있는 태그 확인
  for (let i=ops.length-1;i>=0;i--) {
    if(ops[i].selected){
      // 체크되어 있는 태그를 배열에서 삭제
      let index = arr.indexOf(ops[i]);
      arr.splice(index,1);
      
      // 추가된 원소를 자손으로 추가
      var txt = document.createTextNode(ops[i].value);
      var op = document.createElement('option');
      op.appendChild(txt);
      to.appendChild(op);
      
      // 체크 되어 있는 태그를 삭제
      ops[i].parentNode.removeChild(ops[i]);
    }
  }
}

function selectAll() {
  let ops = document.getElementsByTagName('option')
  for(let i=0;i<ops.length;i++) {
    ops[i].selected = true;
  }
}