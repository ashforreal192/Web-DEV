function song() {
    console.log("Do")
    console.log("re")
    console.log("mi")
}
console.log(song())

// Funtion with an argument mentioned.
// argument is basically the thing mentioned inside the bracket beside the funtion's name.
function greet(person) {
    console.log(`Hey there ${person}`)
    console.log("How've u been?")
}
console.log(greet("Vansh"))

// Function with multiple arguments
function greetings(firstname, lastname) {
    console.log(`Hey aren't you ${firstname}??! I mean ${firstname} fucking ${lastname}!!?`)
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
    console.log(result)
}