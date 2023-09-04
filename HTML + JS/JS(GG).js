let maximum = parseInt(prompt("Enter the maximum number"))

while (!maximum) {
    maximum = parseInt(prompt("Enter the maximum number"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum)

let guess = prompt("Enter your first guess!")
let attempts = 1

while (parseInt(guess) !== targetNum) {
    if (guess === "q") {
        console.log("Okay! quitting")
        break
    }
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
        attempts++
    }
    else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:")
        attempts++
    }
    else {
        guess = prompt("Invalid guess.")
    }
}

if (guess !== "q" && attempts === 1) {
    console.log(`It took you only one guess!`)
} else if (guess !== "q") {
    console.log(`It took you ${attempts} guesses!`);
}
