// Push adds components to the end of an array.....array.push("component")
let myArr = [1, 2, 3, 4]
myArr.push(5, 7)
console.log(myArr)
// Pop removes components from the end of arrays.....array.pop("component")
myArr.pop()
console.log(myArr)
// Shift removes components from the start of arrays.....array.shift("component")
myArr.shift()
console.log(myArr)
// Unshift adds components to the start of arrays......array.unshift("component")
myArr.unshift(9)
console.log(myArr)

// concat merges arrays.
let cats = ["Biu", "Kitty", "Diana"]
let dogs = ["Bruno", "Pluto", "Scooby", "Shepherd"]
// Code is as follows:
let pets = cats.concat(dogs)
console.log(pets)
// Another way to concat two arrays (This is known as spread operator):
let allPets = [...cats, ...dogs]
console.log(allPets)

// A method to decipher an array which has a depth more than 1:
const anArr = [1, 2, [3, 4, 5], 6, 7]
const realArr = anArr.flat(2)
// Inside the bracket, we are supposed to write the depth we want the array to be deciphered down to. Here it would be 2.
const realArr2 = anArr.flat(Infinity)
// But we can also write infinity, it will just decipher the array down to the entire depths available.
console.log(realArr)
console.log(realArr2)

// Converting a non-array datatype into an array
console.log(Array.isArray.apply("Shatodru")) // Will give boolean response. Clearly not an array. It's a string
// Now the conversion:
console.log(Array.from("Shatodru"))


// Includes: Outcome is a boolean response and it shows if something is there or not inside an array.
console.log(cats.includes("Barbeque"))
console.log(cats.includes("Kitty"))

// Reverse: Reverses the order of an array. Changes the original array.
console.log(pets.reverse())


// Slice: returns a shallow copy of a portion
// of an array into a new array object selected from start to end
// Doesn't change the original array
console.log(pets.slice(2))
console.log(pets.slice(1, 4))
// For the last three elements to show.
console.log(pets.slice(-3))


// Splice: The splice() method changes the contents of an array by removing or 
// replacing existing elements and/or adding new elements in place
// Changes the original array
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

console.log(colors)

