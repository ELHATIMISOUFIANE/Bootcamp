//Ex1

function isBlank(str) {
    return str.trim() === '';
  }
  
  console.log(isBlank(''));      // true
  console.log(isBlank('abc'));   // false
  console.log(isBlank('   '));   // true (only whitespace)

//Ex2

  function abbrevName(fullName) {
    const parts = fullName.split(' ');
    return parts[0] + ' ' + parts[1].charAt(0) + '.';
  }
  
  console.log(abbrevName("Robin Singh"));  // "Robin S."
  console.log(abbrevName("John Doe"));     // "John D."


//Ex3

  function swapCase(str) {
    return str.split('').map(char => 
      char === char.toUpperCase() 
        ? char.toLowerCase() 
        : char.toUpperCase()
    ).join('');
  }
  
  console.log(swapCase('The Quick Brown Fox'));  // "tHE qUICK bROWN fOX"
  console.log(swapCase('Hello World'));         // "hELLO wORLD"

  //Ex4

  function isOmnipresent(arr, value) {
    return arr.every(subArray => subArray.includes(value));
  }
  
  console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));  // true
  console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));  // false
  console.log(isOmnipresent([[3,4],[8,3,2],[3],[9,3],[5,3],[4,3]], 3)); // true

  //Ex5

  const table = document.body.firstElementChild;

// Color all diagonal cells red
for (let i = 0; i < table.rows.length; i++) {
 
  table.rows[i].cells[i].style.backgroundColor = 'red';

  const secondaryIndex = table.rows.length - 1 - i;
  table.rows[i].cells[secondaryIndex].style.backgroundColor = 'red';
}

/* Alternative solution for just the main diagonal:
for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}
*/