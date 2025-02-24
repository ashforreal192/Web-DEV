// Another way of reprsenting getters and setters

function User(email, password){ // Constructor functions should start with a capital letter
    this._email = email
    this._password = password


    Object.defineProperty(this, "email", {
        get: function(){
            return `${this._email.toUpperCase()}@gmail.com`
        },
        set: function(value){
            this._email = value
        },
    })
    
    Object.defineProperty(this, "password", {
        get: function(){
            return `${this._password}-AAAAGGGHHH`
        },
        set: function(value){
            this._password = value
        },
    })


}


const shatodru = new User("shatodru", 123456)
console.log(shatodru);
console.log(shatodru.email);
console.log(shatodru.password);
