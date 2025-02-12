// Example 1:
const chai = () => {
    let username = "Hitesh"
    console.log(this)
    console.log(this.username)
}
chai()

// Example 2:
const addNums = (num1, num2) => {
    return num1 + num2
}
console.log(addNums(5, 6))

// Example 3:
const addNumbers = (num3, num4) => {
    console.log(num3 + num4)
}
addNumbers(7, 3)

// Example 4:
// Implicit return demo:
const addStrings = (string1, string2) => (string1 + string2) // No need to use "return" when using normal brackets, only needs to be used in case of curly brackets.
console.log("Shat" + "odru");



// Difference between normal and arrow functions:
// Regular Functions have their own this value, which is determined by how the function is called.
// In methods, this refers to the object that called the function.
// In standalone functions, this refers to the global object (window in browsers, global in Node.js) or undefined in strict mode.
// For example:
const obj = {
    name: "Alice",
    greet: function() {
      console.log(this.name); // `this` refers to `obj`
    }
  };
obj.greet(); // Output: "Alice"

// Arrow Functions do not have their own this value. Instead, they inherit this from the parent (lexical) scope
// This makes arrow functions ideal for use in callbacks or when you want to preserve the context of this.
// for example
const obj2 = {
    name2: "Alice",
    greet2: () => {
      console.log(this.name2); // `this` refers to the global/window object
    }
  };
obj2.greet2(); // Output: undefined (or window.name if defined globally)