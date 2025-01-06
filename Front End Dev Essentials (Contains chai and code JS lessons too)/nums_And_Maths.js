// NUMBERS......

const score = 400
console.log(score)

const balance = new Number(300) // This just specifies the data type deliberately. O/P is more specific
console.log(balance)

console.log(balance.toString()) // Converts data type
console.log(balance.toString().length) // Extension of this using a prototype


const otherNumber = 23.8629
console.log(otherNumber.toPrecision(3)) // Rounds of the number's first 3 digits....output is 23.9

const otherNumberr = 123.8629
console.log(otherNumberr.toPrecision(3)) // Rounds of the number's first 3 digits....output is 124

const hundreds = 1000000000
console.log(hundreds.toLocaleString()) // Will insert commas in the number, in american style by default


// MATHS......
console.log(Math) // Write this in a browser console and you'll see a lot of math properties as a list


console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.random());
