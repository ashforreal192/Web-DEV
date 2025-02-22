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
