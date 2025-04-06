//Ex1:

/*<!DOCTYPE html>
<html>
<head>
    <title>Formulaire avec GET</title>
</head>
<body>
    <form action="index.html" method="GET">
        <div>
            <label for="name">Nom:</label>
            <input type="text" id="name" name="name">
        </div>
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="30"></textarea>
        </div>
        <div>
            <input type="submit" value="Send">
        </div>
    </form>
</body>
</html>*/





/*********************************************************/




//Ex2:

/*<!DOCTYPE html>
<html>
<head>
    <title>Formulaire avec POST</title>
</head>
<body>
    <form action="index.html" method="POST">
        <div>
            <label for="name">Nom:</label>
            <input type="text" id="name" name="name">
        </div>
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="30"></textarea>
        </div>
        <div>
            <input type="submit" value="Send">
        </div>
    </form>
</body>
</html>
*/





/*********************************************************/




//Ex3 

//1
const marioGame = {
    detail: "An amazing game!",
    characters: {
      mario: {
        description: "Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser: {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach: {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
    },
  };
const jsonMario = JSON.stringify(marioGame);
console.log(jsonMario);


//2

const prettyJsonMario = JSON.stringify(marioGame, null, 2);
console.log(prettyJsonMario);




