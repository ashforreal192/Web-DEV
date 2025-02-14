let totalEggs = 0
function collectEggs() {
    totalEggs = 6
}
console.log(totalEggs)
collectEggs()
console.log(totalEggs)
// Shows two different results. First it will show 0 and after applying the function, it'll show 6


function bankRobbery() {
    const heroes = ["Spiderman", "Batman"]
    function cryForhelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`Please help us ${hero.toUpperCase()}`)
            }
        }
        inner()
    }
    cryForhelp()
}
bankRobbery()


// Function expressions
const multi = function (num) {
    return num * num
}
const result = multi(5)
console.log(result)

// Functions as arguments:

function twice(func) {
    func()
    func()
}

function laugh() {
    console.log("hahahhaha")
}

twice(laugh)


// Two die throws


// For two roll of the die
function callTwice(twice) {
    twice()
    twice()
}

// For ten rolls
function callTentimes(decade) {
    for (let i = 0;
        i < 10;
        i++) {
        decade()
    }
}

// Funtion which is to be applied depending on the number of times we are throwing the die.
function RollDie() {
    const dieNum = Math.floor(Math.random() * 6) + 1
    console.log(dieNum)
}


// Two die roll result
callTwice(RollDie)
console.log("Break")
// Ten die roll result
callTentimes(RollDie)


// Returning Functions

function Mysteryfunc() {
    const rand = Math.random()
    if (rand > 0.5) {
        return function () {
            console.log("Congrats")
            console.log("You win a million dollars!!")
        }
    }
    else {
        return function () {
            alert("You've been infected by a computer!")
        }
    }
}
const mystery = Mysteryfunc()
console.log(mystery)

// Example

function ageJudgement(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

const isChild = ageJudgement(0, 18)
const isAdult = ageJudgement(19, 60)
const isSenior = ageJudgement(61, 90)

function ageResponse(age) {
    if (isChild(age)) {
        return "You're a kid"
    } else if (isAdult(age)) {
        return "You're an adult";
    } else if (isSenior(age)) {
        return "You're a senior citizen";
    } else {
        return "Age range not defined";
    }
}

const age = 30
// Change the value of 'age' and see the response changing
const response = ageResponse(age)
console.log(response)

// Defining methods. Through Objects
const myMAth = {
    PI: 3.14159,
    square(num) {
        return num * num
    },
    cube(num) {
        return num ** 3
    }
}
console.log(myMAth.square(3))
console.log(myMAth.cube(5))
console.log(myMAth.cube(2) * myMAth.PI)
