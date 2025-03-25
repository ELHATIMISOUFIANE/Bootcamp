// Part 1
const container = document.getElementById('container');
console.log(container);

const lists = document.querySelectorAll('.list');
lists[0].children[1].textContent = 'Richard';

lists[1].children[1].remove();

lists.forEach(list => {
  list.firstElementChild.textContent = 'YourName';
});

// Part 2
lists.forEach(list => list.classList.add('student_list'));
lists[0].classList.add('university', 'attendance');

// Part 3
container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

document.querySelectorAll('li').forEach(li => {
  if (li.textContent === 'Dan') li.style.display = 'none';
  if (li.textContent === 'Richard') li.style.border = '1px solid black';
});

document.body.style.fontSize = '18px';

// Bonus
if (container.style.backgroundColor === 'lightblue') {
  const users = Array.from(lists[0].children).map(li => li.textContent);
  alert(`Hello ${users.join(' and ')}`);
}