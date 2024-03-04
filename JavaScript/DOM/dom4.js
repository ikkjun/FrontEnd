// DOM manipulation

// Reveal Event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-contend');

function revealContent() {
  if(hiddenContent.classList.contains('reveal-btn')) {
    hiddenContent.classList.remove('reveal-btn')
  } else {
    hiddenContent.classList.add('reveal-btn')
  }
}

revealBtn.addEventListener('click', revealContent);