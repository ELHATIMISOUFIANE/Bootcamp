const details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer",
  };
  
  let phrase = "";
  for (let key in details) {
    phrase += `${key} ${details[key]} `;
  }
  console.log(phrase.trim()); // "my name is Rudolf the reindeer"