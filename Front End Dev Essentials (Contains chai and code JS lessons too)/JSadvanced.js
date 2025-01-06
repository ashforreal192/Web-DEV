// Higher order functions

// Any function which either accepts another function as the parameter or returns another function.

// Accepts a function
function abcd(val) {
}
abcd(function () { })
// Accpets another function
// OR
function abcd() {
    return function () { }
}


// Constructor function
// Any function which sets the parameter of the product but isn't the product itself, is called constructor function
// Example
function saanchaOfBiscuit() {
    this.height = 22;
    this.width = 12;
    this.color = "Brown";
    this.taste = "Sugary";
}
new saanchaOfBiscuit()
// The combination of new and the function itself is the product which is actully put to use. It's the final product


// First class functions are functions which can be treated both as normal values as well as variables. Such as...
setTimeout(function () { })




// iife - immediately invoked function expression
// Functions which help in making private variables which can't be changed or accessed later by others.
// Example
var ans = (function () {
    var privateVal = 12;
    // privateVal can't be accessed by others.

    // So, to access it, we use
    return {
        getter: function () {
            console.log(privateVal);
        },
        setter: function (val) {
            privateVal = val
        }
    }

    // So now, the privateVal can be accessed by writing "ans.getter" in the console
    // As a result of that, the variable privateVal is hidden from public view.

    // And the setter is used to change the value of privateVal if desired.
    // By writing in the console ans.setter(desired value)
})()


// Prototype - it's basically the collection of helper functions and methods which are made for the convinence of the coder.
// It's provided by JS itself.
// Such as arr.length
// It also contains the keys of objects which is inherited
// Example
var human = {
    canTalk: true,
    canFly: false,
    haveEmotions: true,
    hasTwoEyes: true
}
// A programmer human can do some extra things but they also do the thigns which any basic human does as well.
var programmerHuman = {
    canCode: true,
    canMakeWebsites: true
}
programmerHuman.__proto__ = human;
// So using this, the new object inherits the humane traits and those traits are placed inside their prototype if we check it out in the console.



// "This" keyword is a word which changes it's context in different scenarios
// In global scope, "this" gives window
console.log(this);

// in function scope, it gives window as well
function abab() {
    console.log(this)
}
abab()

// In method scope, it gives object obj.
// In any method, "this" keyword always refers to parent object
var object = {
    name: "harsh",
    someMethod: function () {
        console.log(this)
    }
}
object.someMethod()
// Function which is inside an object is called a method, not function.
// Another relevant demonstration
var button = document.querySelector("button")
button.addEventListener("click", function () {
    console.log(this)
})
// So on clicking the mentioned button, it's the button itself that's gonna appear in the console.


// Whenever anything is inside curly braces {}, it is in the local scope, and whenever something is outside it, it is in global scope.



// We can also change what the keyword "this" will end up calling
// Example
function abba() {
    console.log(this)
}
// As we know by default, "this" is gonna give window, but....
var obj = { age: 24 }
abcd.call(obj)
// Now, "this" is gonna give obj instead.


// Sometimes, we want the initial function and the set variable to work together yet we want the variable to be called, only when we need it.
// For the we use "bind".
function aabbaa() {
    console.log(this)
}
var obbj = { age: 25 }

var bindedfnc = aabbaa.bind(obbj)
// After this, we can call the bindedfnc which is a separate function which is saved upon using the bind.
bindedfnc();