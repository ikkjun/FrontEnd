// Dom Manipulation

// Event Listeners

// element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn () {
  alert('I also love JavaScript')
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover
const newBackgroundColor = document.querySelector('.btn-3');
function changeBgColor() {
  newBackgroundColor.style.backgroundColor = 'blue';
}
newBackgroundColor.addEventListener('mouseover',changeBgColor);

