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

// For array of objects:
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


// ARROW FUNCTION IMPLICIT RETURNS
// Dosen't need the return keyword since we are only passing one thing at a time so we change the {} into () and it won't effect anything.
// such as:
const rolldie = () => (
    Math.floor(Math.random()*6) + 1
)
console.log(rolldie())

// Or we can also eliminate the bracket completely to deal with the entire thing in a single line:
const addd = (a,b) => a + b
console.log(addd(5,4))
// Or
const subtract = (c,d) => c - d
console.log(subtract(5,1))

// Another example
const moviess = [
    {
        title: "X men",
        rating: 84
    },
    {
        title: "Lincoln lawyer",
        rating: 95
    }
]
const mmovie = moviess.map(movieF => `${movieF.title} - ${movieF.rating/10}`)
console.log(mmovie)


// SETTIMEOUT
// We basically set delays for a function to run
// Such as:
console.log("Hi")
setTimeout(() => {
    console.log("Are you still there?")
}, 2000)
// 2000 as in 2000 milisecs, we wait 2 secs before the "Are you still there?" is printed after "Hi" is printed, which will obviously be printed immediately.


// SetInterval
// To set an interval for something to repeat.
const id = setInterval(() => console.log(Math.random()), 2000)
clearInterval(id)
// Comment out the clearInterval() if you want to see the code running in the console.
// It stops running if you write clearInterval(id) or whatever the variable you have chosen.


// OR:
let ccv;
function calculateCube(b){
    return b**3
}
ccv = setInterval(
function(){
    const b = 5
    const result = calculateCube(b)
    console.log(result)
},2000
)
clearInterval(ccv)

// A more simplified approach for the same code:
// After setting the variable as ccv,
const b = 5; // Set your value of 'b' here
ccv = setInterval(function () {
    const result = b ** 4;
    console.log(result);
}, 2000);
clearInterval(ccv)

// FILTER METHOD
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const odds = numbers.filter(n => {
    return n%2 === 0
})
console.log(odds)

const smallNums = numbers.filter(n => {return n<5})
console.log(smallNums)