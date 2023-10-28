const subreddits = ['cringe', 'soccer', 'chicken', 'comedy']

// Using just for:
for (let
    i = 0;
    i < subreddits.length;
    i++
) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

// Using for..of:
// The sub basically holds all the values in itself just because of it's declaration.
for (let sub of subreddits) {
    console.log(sub)
    // or
    console.log(`Visit reddit.com/r/${sub}`)
}

// In a group of arrays:
const seatingarrangement = [
    ['Nuzair', 'Ash', 'Vansh'],
    ['Betichod', 'Vivaan', 'Himanshu']
]
for (let row of seatingarrangement) {
    for (let student of row) {
        console.log(student)
    }
}

// In just a string:
for (let letters of "hello world") {
    console.log(letters)
}

// THOUGH WE NEED TO USE FOR...IN TO ITERATE OBJECTS IN JS BECAUSE
// THEY ARE NOT CONVENTIONALLY ITERABLE.
const testscores = {
    Kanan: 88,
    Madhavan: 90,
    Ash: 95
}
for (let score in testscores) {
    console.log(score)
}
// bonus
for (let student in testscores) {
    console.log(`${student} scored ${testscores[student]}`);
}

// Another method to print the keys and values and entries of an object.
console.log(Object.keys(testscores))
console.log(Object.values(testscores))
console.log(Object.entries(testscores))

// An interesting method which we can use to let's say take out the 
// average of the scores
let total = 0
let marks = Object.values(testscores)
for (let scores of marks) {
    total += scores
}
console.log(total / marks.length)
console.log(total)