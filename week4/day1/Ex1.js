// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}


funcOne();  

//#2
let a = 0;
function funcTwo() {    
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - Exécution dans la console :
funcThree();   
funcTwo();    
funcThree(); 
//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - Exécution dans la console :
funcFour();   
funcFive();   
//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - Exécution dans la console :
funcSix();  

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - Exécution dans la console :
alert(`in the if block 5`);  
alert(`outside of the if block 2`);  



