// When to Use .bind()?
// 1️⃣ Fixing this in Callbacks
// When passing methods as callbacks, this might get lost. .bind() ensures this remains the expected object.

class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

const user = new User("Alice");
setTimeout(user.greet.bind(user), 1000);
