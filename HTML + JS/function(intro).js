// In JavaScript, a function is a reusable block of code designed to perform a specific task.
// Functions allow you to write code once and execute or "invoke" it multiple times throughout your program.


function song() {
    return(`Do re mi`)
}
console.log(song())

// Funtion with an argument mentioned.
// argument is basically the thing mentioned inside the bracket beside the funtion's name.
function greet(person) {
    console.log(`Hey there ${person}`) // Why not use return here? The return statement instantly terminates the execution of a function and hands the specified value back to the caller.
    // If I used reutrn here I'd have only gotten the o/p of Hey there ${person}
    console.log("How've u been?")
}
console.log(greet("Vansh"))

// Function with multiple arguments
function greetings(firstname, lastname) {
    return(`Hey aren't you ${firstname}??! I mean ${firstname} fucking ${lastname}!!?`)
}
console.log(greetings("George", "Clooney"))

// One more example
function repeat(str, numTimes) {
    let result = " ";
    for (let
        i = 0;
        i < numTimes;
        i++
    ) {
        result += str
    }
    return(result)
}
console.log(repeat("Repetition string", 5))