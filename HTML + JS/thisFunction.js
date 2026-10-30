// In JavaScript, this is a keyword that references the object executing the current function.
// Unlike variables, this is immutable and its value is dynamically determined at runtime based on how a function is called, not where it is defined.


const cat = {
    name: "Blue",
    color: "Grey",
    breed: "Scottish Fold",

    meow(){
        console.log(`${this.name} says MEOWWW`)
    }
}
cat.meow()


// ANother example:
const user = {
    username: "Shatodru",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to our website`)
        console.log(this) // Notice the o/p
    }
}

user.welcomemessage()
console.log(this) // Notice the o/p