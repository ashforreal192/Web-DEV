// The return statement in JavaScript stops the execution of a function and specifies a value to be sent back to the code that called it.
// Think of a function as a coworker you ask to do a task; the return statement is them handing you the final result.


function add(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return false
    }
    let sum = x + y
    return sum
}
console.log(add(5, 7))
console.log(add("abc", 10))
// Return actually holds the value of the function in itself