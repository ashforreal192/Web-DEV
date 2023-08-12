// Push adds components to the end of an array.....array.push("component")
// Pop removes components from the end of arrays.....array.pop("component")
// Shift removes components from the start of arrays.....array.shift("component")
// Unshift adds components to the start of arrays......array.unshift("component")

// concat merges arrays.
let cats = ["Biu", "Kitty", "Diana"]
let dogs = ["Bruno", "Pluto", "Scooby", "Shepherd"]
// Code is as follows:
let pets = cats.concat(dogs)
console.log(pets)


// Include: Outcome is a boolean response and it shows if something is there or not inside an array.
console.log(cats.includes("Barbeque"))
console.log(cats.includes("Kitty"))

// Reverse: Reverses the order of an array. Changes the original array.
console.log(pets.reverse())


// Slice: returns a shallow copy of a portion
// of an array into a new array object selected from start to end
console.log(pets.slice(2))
console.log(pets.slice(1, 4))
// For the last three elements to show.
console.log(pets.slice(-3))


// Splice: The splice() method changes the contents of an array by removing or 
// replacing existing elements and/or adding new elements in place
let colors = ["red", "yellow", "green", "blue", "indigo", "violet"]

console.log(colors.splice(3, 0, "white"))
// Now type colors in the console and
// see the new component added in there

console.log(colors.splice(4, 1, "black"))
// Now type colors in the console and
// see that the "one" as in single component is replaced with the new one.

console.log(colors.splice(3, 2))
// Deletes two components starting from index no. 3 and 
// deleting two components starting from there including 3.

