let totalEggs = 0
function collectEggs() {
    totalEggs = 6
}
console.log(totalEggs)
collectEggs()
console.log(totalEggs)


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

function RollDie() {
    const dieNum = Math.floor(Math.random() * 6) + 1
    console.log(dieNum)
}

callTwice(RollDie)
console.log("Break")
callTentimes(RollDie)