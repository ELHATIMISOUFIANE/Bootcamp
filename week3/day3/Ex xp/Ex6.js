const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

// Add new li
const ul = navBar.firstElementChild;
const newLi = document.createElement('li');
newLi.appendChild(document.createTextNode('Logout'));
ul.appendChild(newLi);

// Display first and last li
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log(firstLi.textContent, lastLi.textContent);    