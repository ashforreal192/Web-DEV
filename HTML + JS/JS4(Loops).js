// The idea of for loops/iterations

for (
    let i = 1;
    i <= 10;
    i++
    // OR, i += 1
) {
    console.log(i, "i am legend")
}


// Another example showing even numbers...
for (
    let h = 0;
    h <= 20;
    h += 2
) {
    console.log(h)
}

// Example of decrement
for (
    let i = 100;
    i >= 0;
    i -= 10
) {
    console.log(i)
}

// Looping over arrays
const animals = ["lions", "zebra", "cheetah"]
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}


// NESTED LOOPS
// Example
for (
    let i = 1;
    i <= 15;
    i++
) {
    console.log(`i is ${i}`)
    for (
        let k = 65;
        k <= 69;
        k++
    ) {
        const letter = String.fromCharCode(k)
        console.log(`      ${letter}. j is a moron`)
    }
}

// Another example of nested loops but the output is interesting so pay attention. This can be used to et's say represent multiplication tables
for (i=1; i<=10; i++){
    console.log(`Table of ${i}`);
    for (j=1; j<=10; j++){
        console.log(i + "*" + j + "=" + i*j);
    }
}

// If we want the code to stop after a certain element is detected
for(let index = 1; index<=20; index++){
    if (index=5){
        console.log("Dectected 5")
        break; // Terminates the loop entirely, stopping further iterations.
    }
    console.log(`Value of i is ${index}`);    
}


// Use of continue: Skips the rest of the current iteration and moves to the next iteration of the loop.
for(let index = 1; index<=20; index++){
    if (index=5){
        console.log("Dectected 5")
        continue;
    }
    console.log(`Value of i is ${index}`);    
}