let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  };
  
  let name = prompt("Quel est votre prénom ?").toLowerCase();
  
  if (name in guestList) {
    console.log(`Bonjour, je m'appelle ${name} et je viens de ${guestList[name]}.`);
  } else {
    console.log("Bonjour, je suis un invité.");
  }