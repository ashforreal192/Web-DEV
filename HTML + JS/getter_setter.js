class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    // Getter and setter demo for password
    get password(){
        return this._password.toUpperCase() // always return in getter
    }
    set password(value){
        this._password = value // return is not meant to be used in setters
    }
    // Getter and setter demo for email
    get email(){
        return `${this._email}@gmail.com`
    }
    set email(value){
        this._email = value    
    }
}

const hitesh = new user("hitesh", "abs")
console.log(hitesh);
console.log(hitesh.password);
console.log(hitesh.email);

// ✅ Why Use get and set?
// Encapsulation: The real data (_password) is private.
// Custom Logic: You can modify data when setting or retrieving.
// Security: Can apply validation (e.g., password length checks).

// 🚀 Key Takeaways
// Getters return a computed value when accessing a property.
// Setters allow custom logic before storing a value.
// Properties managed by get/set don't appear directly in console.log(object), but the actual private variable (_password) does.
// You can modify the behavior (e.g., hash passwords before storing).