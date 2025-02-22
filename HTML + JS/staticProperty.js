class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);        
    }

    static createId(){
        return `123`
    }
}

const shatodru = new user("shatodru")
console.log(shatodru);
console.log(shatodru.createId());


// Role of static in This Code
// The static keyword in JavaScript defines a method that belongs to the class itself, not to instances of the class.
// Why Does shatodru.createId() Cause an Error?
// The method createId() is static, meaning it belongs to the class user, not to any individual instance (shatodru).
// When you try to call shatodru.createId(), JavaScript looks for createId() inside shatodru (the instance), but it's only available on the class

// Since createId() is a static method, you must call it on the class, not the instance:
// console.log(user.createId()); ✅ Correct way to call a static method
