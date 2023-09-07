document.querySelector("h1").innerHTML = "this keyword"
document.querySelector("body").style.color = "white"


const cat = {
    name: "Blue",
    color: "Grey",
    breed: "Scottish Fold",

    meow(){
        console.log(`${this.name} says MEOWWW`)
    }
}
cat.meow()