class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc` //bukchodi
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chai@gmail.com", "1234567")

console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// Role of class
// The class keyword is used to define a blueprint for creating objects.
// In this case, the user class defines properties (username, email, password) and methods (encryptPassword and changeUsername) that every instance of user will have.
// This creates a template for making multiple user objects with consistent structure and behavior.
// Unlike function constructors, class syntax is more readable and supports modern object-oriented programming features like inheritance

// Role of constructor
// The constructor is a special method inside a class that gets executed automatically when a new object is created using new.
// It initializes properties for the object.
// When new user("chai", "chai@gmail.com", "1234567") is executed:
// A new empty object {} is created.
// The constructor method runs, assigning values to this.username, this.email, and this.password.
// The fully formed object is returned.
