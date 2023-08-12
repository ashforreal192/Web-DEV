console.log("hello from our first JS file!");

// If Statements
if (1 + 1 === 2) {
    console.log("maths still makes sense")
}

// nothing significant. don't bother.
console.log(
    "After conditional"
)

// math.random example. 
// Will print on the console when the 
// random number is smaller than 0.5 
// and it won't when the number is larger than 0.5
let random = Math.random()
if (random < 0.5) {
    console.log("Your number is smaller than 0.5!")
}
if (random >= 0.5) {
    console.log("Your number is greater than 0.5!")
}

// Else if example and also just Else
// let a = prompt("Enter a number")
// Like the code mentioned above, we can prompt the user as well.
// Else always comes in the end. either after else if 
// or directly after if
let a = 20
if (a == 22) {
    console.log("Almost useless but still worth it.")
}
else if (a == 20) {
    console.log("Jackpot!!!")
}
else {
    console.log("Bruh")
}

// Nesting conditionals
// The prompts are commented out cuz of the obvious trouble they pose. But do give the codes a real please.
// This is how nesting works.


// const password = prompt("Please enter a new password")
// if (password.length >= 6) {
//     // Here to....
//     if (password.indexOf(" ") === -1) {
//         console.log("Psw good to go.")
//     }
//     else {
//         console.log("Nah dude, no cheating with the spaces.")
//     }
//     // .....here, is nested.
// } else {
//     console.log("password too short")
// }


// LOGICAL operations

// Which are AND(Both true), OR(One of two or more true)
// and NOT(Just negates whatever's mentioned)



// 1. AND
// Represented by ----- &&
// Both sides have to be true for this to be true.
// We can use this to solve the previous password prompting problem more easily.

// Code is as follows:

// const password = prompt("Enter psw")
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Valid psw")
// }
// else {
//     console.log("Password cannot contain gaps and it has to contain more than 6 characters!!!")
// }




// 2. OR
// Represented by ||
// Only one condition out of the multiple has to be ture.

// Code is as follows:

// const age = prompt("Enter age")

// if ((age <= 5 && age > 0) || age >= 60) {
//     console.log("Free!!!")
// }
// else if (age < 40 && age > 5) {
//     console.log("Pay 10 dollars!!!")
// }
// else if (age >= 40 && age < 60) {
//     console.log("Pay 20 dollars!!!")
// }
// else {
//     console.log("Error")
// }







// 3. NOT
// Reverses the boolean value.
// Represented by !

// Code is as follows:

// let firstname = prompt("Enter first name");
// if (!firstname || firstname.indexOf(" ") !== -1) {
//     console.log("Invalid firstname!!!")
// }
// else {
//     console.log("Registered!!!")
// }



// Switch statement
// Code is as follows:

const day = 5
switch (day) {
    case 1: console.log("Sunday")
        break
    case 2: console.log("Monday")
        break
    case 3: console.log("Tuesday")
        break
    case 4: console.log("Wednesday")
        break
    case 5: console.log("Thursday")
        break
    case 6: console.log("Friday")
        break
    case 7: console.log("Saturday")
        break
    default:
        console.log("Invalid, dosen't exist")


    // To merge cases, code is as follows:

    // case 1:
    // case 7:
    //     console.log("Weekend!!!")
    //     break


}