// The idea of for loop

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