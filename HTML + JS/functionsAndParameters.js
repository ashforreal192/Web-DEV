function addTwoNums (number1, number2) { //number1 and number2 are parameters
    console.log(number1 + number2);
}
console.log(addTwoNums(3, 4)) // Two numbers o/p: 7.....3 and 4 inside are arguments
console.log(addTwoNums(3, "4")) // number and string o/p: 34
let result = addTwoNums(5, 9)
console.log("Result: ", result) //o/p: Output: undefined. The function `addTwoNums` does not return any value; it only logs the sum to the console. Therefore, `result` is `undefined`.


// If you want the function to return the sum instead of just logging it, you can modify it like this:
function addTwoNums2(number3, number4) {
    return number3 + number4; // Return the sum instead of logging it
}
let result2 = addTwoNums2(10, 11)
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
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)    
}
handleObject(user2)


// OR:
// We can use object literal: Instead of passing a pre-declared object like user2, we directly pass an object literal
function handleObject2 (anyObject2) {
    console.log(`Username is ${anyObject2.username} and price is ${anyObject2.price}`)
}
handleObject2 ({
    username: "riya",
    price: 155
})

// We can do the same with arrays:
const myArray = [1, 2, 3, 4]
function returnMentionedValue (getArray) {
    return getArray[2]
}
console.log(returnMentionedValue(myArray));

// OR:

function returnMentionedValue2 (getArray2) {
    return getArray2[1]
}
console.log(returnMentionedValue2([3, 4, 5, 6]));