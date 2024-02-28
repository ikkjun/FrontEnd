// Parent Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentElement);
// console.log(html.parentNode); // mostly node

// Child Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal
let ul = document.querySelector('ul');
const div = document.querySelector('div');
// console.log(div.childNodes);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
