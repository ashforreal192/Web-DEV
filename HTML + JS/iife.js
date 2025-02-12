// Immediately Invoked Function Expressions IIFE:
// Creating Private Scope (Encapsulation):

// Problem: In JavaScript, variables declared with var are function-scoped or globally scoped.
// This can lead to naming collisions and unintended modification of variables in different parts of your code.

// IIFE Solution: IIFEs create a new scope. Variables declared inside an IIFE are only accessible within that IIFE.
// This prevents accidental access or modification from the outside, promoting modularity and preventing pollution of the global scope.   

// Example: (Named iife)
(function chai(){
    console.log("DB connected")
})();


// Or: using arrow function (Unnamed iife)
(() => {
    console.log("Let's go!!")
})();


// Putting variable in arrow function in iife:
((username) => {
    console.log(`Hi, ${username}`)
})("Atharv");

// IMPORTANT: ALWAYS PUT SEMICOLON AFTER COMPLETING AN IIFE. BECAUSE IT DOENS'T KNOW WHERE TO STOP.