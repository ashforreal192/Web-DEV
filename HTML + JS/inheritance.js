class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        return `Username is ${this.username}`;        
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username) // super has to come before the other two because JavaScript will throw an error if "this" keyword is used in a child class before calling super().
        this.email = email
        this.password = password
    }


    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new teacher('Ashutosh', 'ashutosh@gmail.com', '123')
console.log(chai);

const masalaChai = new user("masalaChai")
console.log(masalaChai.logMe());



// Role of super in JavaScript:

// Calling the Parent Class Constructor:
// When a subclass (child class) extends a parent class, super() is used to call the constructor of the parent class.
// This ensures the child class inherits properties and behaviors from the parent.
// JavaScript will throw an error if "this" keyword is used in a child class before calling super().

// Calling Parent Class Methods:
// super.methodName() is used to call methods from the parent class inside the child class.