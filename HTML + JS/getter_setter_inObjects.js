const User = {
    _email: "hitesh",
    _password: "jumba",
    // The underscore (_) in _email and _password is just a naming convention to indicate these properties should be treated as private (though JavaScript does not enforce this).
    get email(){
        return `${this._email.toUpperCase()}@gmail.com`
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}

const hitesh = Object.create(User)
console.log(hitesh);
console.log(hitesh.email);
console.log(hitesh.password);