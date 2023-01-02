let li = document.createElement('li');

li.textContent = 'task 3';
let ul = document.querySelector('ul');
let first = ul.children[0];

ul.insertBefore(li, first);

ul.children[1].remove();