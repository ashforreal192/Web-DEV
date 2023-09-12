// let and const
// we have to assign a value whenever we are making a const
// we don't have to assign a value to a let whilst making it
// demo:
let a;
// This won't be an error.
// const b;
// This would be an error (Un-comment to see that it actually is)

{
    let b = 12
}
console.log(b)
// This would be an error. variables made by 'let' can't be accessed outside braces. Same goes with 'const'
// But with 'var', that's not a problem.


// Arrow functions:
// Types:
// 1. Basic arrow functions
var c = () => {}
c()
// A function is stored in variable c and then when c is called, the fucniton inside it is called as well.

// 2. Arrow function with one parameter
var square = (d) => {return d*d}
console.log(square(15))

// 3. Arrow function with implicit return
var e = () => 12
console.log(e())
// Whatever we write after the arrow, returns itself.