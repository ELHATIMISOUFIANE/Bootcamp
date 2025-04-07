/****************************Exercice 1***********************************/

function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve("Le nombre est inférieur ou égal à 10");
      } else {
        reject("Le nombre est supérieur à 10");
      }
    });
  }
  
// Dans cet exemple, la promesse sera rejetée car 15 > 10
compareToTen(15)
  .then(result => console.log(result))  // Ne sera pas exécuté
  .catch(error => console.log(error));  // Affichera : "Le nombre est supérieur à 10"

// Dans cet exemple, la promesse sera résolue car 8 <= 10
compareToTen(8)
  .then(result => console.log(result))  // Affichera : "Le nombre est inférieur ou égal à 10"
  .catch(error => console.log(error));  // Ne sera pas exécuté




  /****************************Exercice 2***********************************/

  function delayedSuccess() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("success");
      }, 4000);  // Attendre 4 secondes avant de résoudre la promesse
    });
  }
  
  delayedSuccess().then(result => console.log(result));  // Affichera "success" après 4 secondes


   /****************************Exercice 3***********************************/

   const resolvedPromise = Promise.resolve(3);
   resolvedPromise.then(result => console.log(result));  // Affichera : 3
   const rejectedPromise = Promise.reject("Boo!");
   rejectedPromise.catch(error => console.log(error));  // Affichera : Boo!

   


  