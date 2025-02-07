// JavaScript is a prototype-based, automatically adds a prototype property to functions upon creation.
// This prototype object allows attaching methods and properties, facilitating inheritance for all objects created from the function.
// how to access the prototype for a string?
// example:
const gameName = new String("Shatodru-Sarkar")
console.log(gameName)


console.log(gameName.__proto__) // This is the code.
console.log(gameName.toUpperCase()) // Converts the string to uppercase
console.log(gameName.charAt(2)) // Specifies the character at second position
console.log(gameName.indexOf("t")) // Specifies the position of said character
console.log(gameName.substring(0, 4))
console.log(gameName.substring(0, 4).toUpperCase())

// We can replace a value in a certain string as well using this method:
const url = "http://shawtty.com/shatodru%20sarkar"
// let's say I wanna replace the part "%20" in the url, so what I would do is...
console.log(url.replace("%20", "-"))

console.log(url.includes("sundar")) // Will check if the string includes the mentioned string in includes. Boolean response would be given


// How to include values of variables in a string:
const MyName = "Aryan"
const marks = 45
console.log(`My name is ${MyName} and I got ${marks} out of 50 in social science`)



// Some other prototype methods:

// charCodeAt(index)
// Description: Returns the Unicode of the character at the specified index.
const str = "Hello";
console.log(str.charCodeAt(1));


// concat(...strings)
// Description: Joins two or more strings.
const string1 = "Hello";
const string2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"


// endsWith(searchString, length)
// Description: Checks if a string ends with a specified string/characters.
const str1 = "Hello World";
console.log(str.endsWith("World")); // true


// repeat(count)
// Description: Returns a new string with a specified number of copies
const str2 = "Hello";
console.log(str.repeat(3)); // "HelloHelloHello"

// trim()
// Description: Removes whitespace from both ends of a string.
const str3 = "   Hello World   ";
console.log(str.trim()); // "Hello World"


// trimStart() / trimEnd()
// Description: Removes whitespace from the start or end of a string.
const str4 = "   Hello World   ";
console.log(str.trimStart()); // "Hello World   "
console.log(str.trimEnd());   // "   Hello World"


// slice(start, end)
// Description: Extracts a part of a string and returns a new string.
const str5 = "Hello World";
console.log(str.slice(0, 5)); // "Hello"
// str.slice(0, 5)
// Start Index (0): The extraction starts at index 0, which is the beginning of the string.
// End Index (5): The extraction stops just before index 5.
// Extracted Portion: The characters at indices 0 to 4 are extracted, resulting in "hello"


// OR

const str6 = "Hello World";
console.log(str.slice(0, 6)); // "Hello "
// str.slice(0, 6)
// Start Index (0): The extraction starts at index 0, same as before.
// End Index (6): The extraction stops just before index 6.
// Extracted Portion: The characters at indices 0 to 5 are extracted, resulting in "hello " (notice the space included).

