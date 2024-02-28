// Parent Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.parentNode);
// console.log(ul.parentElement.parentElement);

const html = document.documentElement;
console.log(html.parentElement);
console.log(html.parentNode); // mostly node

// Child Node Traversal
let ul = document.querySelector('ul');
console.log(ul.childNodes);