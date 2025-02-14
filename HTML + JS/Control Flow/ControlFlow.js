// Control flow in JavaScript refers to the order in which statements in a program are executed.
// It determines the path the program takes, deciding which blocks of code are run and which are skipped, based on conditions, loops, and function calls. 
// Essentially, it's the logic that directs the execution of your code.


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
} // won't be successful even if one is false

if (loggedInFromGoogle || loggedInFromGmail){
    console.log("Allow to buy course");
} // will be successful even if one is false
