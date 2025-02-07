function addTwoNums (number1, number2) { //number1 and number2 are parameters
    console.log(number1 + number2);
}
console.log(addTwoNums(3, 4)) // Two numbers o/p: 7.....3 and 4 inside are arguments
console.log(addTwoNums(3, "4")) // number and string o/p: 34
let result = addTwoNums(5, 9)
console.log("Result: ", result) //o/p: Output: undefined. The function `addTwoNums` does not return any value; it only logs the sum to the console. Therefore, `result` is `undefined`.


// If you want the function to return the sum instead of just logging it, you can modify it like this:
function addTwoNums(number3, number4) {
    return number3 + number4; // Return the sum instead of logging it
}
let result2 = addTwoNums(10, 11)
console.log("Result: ", result2); // Output: Result: 14


// One more example which is more practical:
function loggedIn (username) {
    return `${username} just logged in`
}
console.log(loggedIn("shatodru"))
// or:
let user = loggedIn("aryan")
console.log(user)
// what if we pass nothing?
console.log(loggedIn()) // o/p: undefined just logged in. Refer down to view the solution


// A possible solution to the above problem of passing nothing.
function isLoggedIn2 (username2) {
    if(username2 === undefined){
        console.log("Please enter a username")
    }
    else{
        return `${username2} just logged in`
    }
}
console.log(isLoggedIn2("Rajat"))
console.log(isLoggedIn2())



// One more example:
const user2 = {
    username: "shawtty",
    price: 199
}
function handleObject (anyObject) {
    console.log()    
}