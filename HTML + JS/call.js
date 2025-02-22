function setUsername(username){
    this.username = username
}

function createUsername(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUsername ("chai", "chai@gmail.com", "234")
console.log(chai);


// Role of call
// call is a method in JavaScript that allows you to invoke a function with a specific this context
// setUsername.call(this, username)
// Here, call is invoking setUsername, and this is passed as the first argument.
// This ensures that setUsername sets this.username = username inside the createUsername function.
// Without call, setUsername would run in the global scope (or undefined in strict mode), leading to unintended behavior.


// Role of this in (this, username)
// this refers to the context of the createUsername function when it's invoked with new.
// It ensures that setUsername modifies the same object being created by createUsername.
// If this were omitted, setUsername wouldn't set the username property on the new object correctly


// Role of new
// new creates a new object and sets this inside createUsername to refer to that new object.
// Steps that happen when using new:
// A new empty object {} is created.
// this inside createUsername refers to this new object.
// Properties (username, email, password) are added to this.
// The new object is returned automatically.
// Without new, this inside createUsername would refer to the global object (or undefined in strict mode), leading to an error or unexpected behavior.