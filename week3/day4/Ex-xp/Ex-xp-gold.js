//Ex1

  // Display the value of the selected option
  const genresSelect = document.getElementById('genres');
  console.log("Selected value:", genresSelect.value);
  
  // You can also listen for changes
  genresSelect.addEventListener('change', function() {
    console.log("New selected value:", this.value);
  });

//Ex2


  function removecolor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedIndex = colorSelect.selectedIndex;
    
    if (selectedIndex !== -1) {
      colorSelect.remove(selectedIndex);
    }
  }


//Ex3

//<div id="root"></div>
//<script src="script.js"></script>

let shoppingList = [];

// Get the root element
const root = document.getElementById('root');

// Create form
const form = document.createElement('form');
form.id = 'shopping-form';

// Create input field
const input = document.createElement('input');
input.type = 'text';
input.id = 'itemInput';
input.placeholder = 'Enter item to buy';

// Create Add button
const addButton = document.createElement('button');
addButton.type = 'button';
addButton.textContent = 'AddItem';
addButton.addEventListener('click', addItem);

// Create Clear button
const clearButton = document.createElement('button');
clearButton.type = 'button';
clearButton.textContent = 'ClearAll';
clearButton.addEventListener('click', clearAll);

// Create list display
const listDisplay = document.createElement('ul');
listDisplay.id = 'shoppingListDisplay';

// Append elements to form and root
form.appendChild(input);
form.appendChild(addButton);
root.appendChild(form);
root.appendChild(clearButton);
root.appendChild(listDisplay);

// Add item function
function addItem() {
  const itemInput = document.getElementById('itemInput');
  const item = itemInput.value.trim();
  
  if (item) {
    shoppingList.push(item);
    itemInput.value = ''; // Clear input field
    updateListDisplay();
  }
}

// Clear all function
function clearAll() {
  shoppingList = [];
  updateListDisplay();
}

// Update the displayed list
function updateListDisplay() {
  const listDisplay = document.getElementById('shoppingListDisplay');
  listDisplay.innerHTML = ''; // Clear current display
  
  shoppingList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listDisplay.appendChild(li);
  });
}