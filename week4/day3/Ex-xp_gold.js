//Ex1
function printFullName({ first, last }) {
    return `Your full name is ${first} ${last}`;
  }
  
  console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));

  
  //Ex2
  function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);
    return [keys, values];
  }

  //EX3
// 3
