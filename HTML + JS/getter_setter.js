// Getters and setters are special methods in JavaScript that allow you to define properties that behave like regular variables on the outside,
// but execute custom functions on the inside.
// They give you direct control over how an object's properties are read (get) and written (set),
// allowing you to validate data, log changes, or compute values on the fly.


// Syntax Breakdown
// • Getter (get): Binds an object property to a function that will be called automatically when that property is looked up / read. It must not accept any arguments.
// • Setter (set): Binds an object property to a function that will be called automatically when that property is assigned a new value. It accepts exactly one argument (the new value).




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
console.log(hitesh.email);
console.log(hitesh.password);

// ✅ Why Use get and set?
// Encapsulation: The real data (_password) is private.
// Custom Logic: You can modify data when setting or retrieving.
// Security: Can apply validation (e.g., password length checks).

// 🚀 Key Takeaways
// Getters return a computed value when accessing a property.
// Setters allow custom logic before storing a value.
// Properties managed by get/set don't appear directly in console.log(object), but the actual private variable (_password) does.
// You can modify the behavior (e.g., hash passwords before storing).