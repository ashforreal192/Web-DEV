// TRY/CATCH
// If we anticipate an error coming up, we use catch alongside try. It's kinda like the alt which comes up when an img is not visible. u get me?
// Such as:
// This is important for making websites down the road where APIs will be called and other real time stuff. A lot of things could go wrong in it.
try{
    hello.toUpperCase();
    // There is no hello, so an error is inevitable.
}
catch{
    console.log("Error!!!!")
    // Error!!!! would be visible instead
}


// This could also be used kinda like if-else
// Such as:
function yell(msg){
        // Only strings can be converted into uppercase. But what if we enter a number in there?? See what happens then.
        try{
    console.log(msg.toUpperCase().repeat(3))
    }
catch (e){
    console.log(e)
    console.log("Please enter a string.")
    }
}


// FOR/EACH
// Calls a function once per item inside an array.
// Such as:
const nums = [1,2,3,4,5,6,7,8,9]
    // To print squares
nums.forEach(function(n){
    console.log(n*n)
})
// To print even numbers
nums.forEach(function(en){
    if(en % 2 === 0){
        console.log(en)
    }
})



// MAP
// Quite like for/each but here a new array is generated after the passing of the function
// Such as:
const small = ['lol', 'lmao', 'rofl']
const caps = small.map(function(m){
    return m.toUpperCase()
})
console.log(small)
console.log(caps)

const num = [4,6,8,9]
const numCube = num.map(function(c){
    return c**3
})
console.log(num)
console.log(numCube)

// For objects:
const movies = [
    {
        title: "Amadeus",
        rating: 99
    },
    {
        title: "Home Alone",
        rating: 90
    }
]
const titles = movies.map(function(t){
    return t.title.toUpperCase()
})
console.log(movies)
console.log(titles)


// ARROW FUNCTION
// Helps us to make a function expression. Unlike maps or for each where we can only use the function once.
// such as:
// example 1
const square = (x) => {
    return x*x
}
console.log(square(5))

// example 2
const add = (x,y) => {
    return x + y
}
console.log(add(4,3))

// example 3
const rollDie = () => {
    return Math.floor(Math.random()*6) + 1
}
console.log(rollDie())