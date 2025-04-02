let landscape = function() {

    let result = "";
   
    let flat = function(x) {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    let mountain = function(x) {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    return result;
   }
   
   landscape()
  
   /**
    * the output of the code could be : "____/''''\\____"
    */
  
   const landscape = () => {
    let result = "";
   
    const flat = (x) => {
      for(let count = 0; count < x; count++) {
        result = result + "_";
      }
    };
   
    const mountain = (x) => {
      result = result + "/";
      for(let counter = 0; counter < x; counter++) {
        result = result + "'";
      }
      result = result + "\\";
    };
   
    flat(4);
    mountain(4);
    flat(4);
   
    return result;
  };



  const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

// the output might be 13 because we are adding 10 to 3

const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// the output might be 31 because we are adding 30 to 1

const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

/**
 * the output might be 17 because we are adding 5 to 12
 * 5 enters the function curriedSum and is assigned to a
 * 12 enters the function add5 and is assigned to b
 * how? because curriedSum(5) returns a function that takes a parameter b
 */

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

/**
 * the output might be 16 because we are adding 1 to 5
 * 10 enters the function compose and is assigned to a
 * add5(10) returns 15
 * add1(15) returns 16
 * compose(add1, add5)(10) returns 16
 */