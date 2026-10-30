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


// Maps:
const map = new Map()
map.set("IN", "India")
map.set("Pak", "Pakistan")
map.set("FR", "France")
console.log(map);

for (const [keys, values] of map) {
    console.log(keys, ":-", values);
    
}

// Another application of maps:
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
const newNums = myNumbers.map((numss) => {
    return numss + 10
})
console.log(newNums);

// We can also perform chaining using maps: (Refer to the array above)
const newNums2 = myNumbers
                    .map((num) => {return num + 15}) // Let's say this produces array1 with each element + 15 in it.
                    .map((num) => {return num * 10}) // Elements of array1 will be considered here with which 10 would be multiplied.
                    .filter((num) => {return num > 180}) // Also including filter into the chain.
console.log(newNums2);


// For objects: (For-in loop is used here for objects)
const myGames = {
    game1: "NFS",
    game2: "God of War",
    game3: "Sleeping Dogs"
}
for (let element in myGames) {
    console.log(element, ":", myGames[element]);
    console.log(element);
    console.log(myGames[element]);
}


// High order array loops:
const coding = ["js", "ruby", "java", "python"]
coding.forEach(
    function(item){
        console.log(item); // Will print all the elements from the array.        
    }
)
// Same thing using arrow functions:
coding.forEach(
    (val) => {
        console.log(val); // Will print all the elements from the array.        
    }
)
// Additional parameters you can learn about:
coding.forEach(
    (item, index, arr) => {
        console.log(item, index, arr);        
    }
)

// For arrays with objects inside:
const myCoding = [
    {
        languageName: "JavaScript",
        langauageFileName: "JS"
    },
    {
        languageName: "Python",
        langauageFileName: "py"
    },
    {
        languageName: "Cascading Style Sheets",
        langauageFileName: "css"
    }
]
myCoding.forEach(
    (item, arr) => {
        console.log(item);
        console.log(item.langauageFileName);
        console.log(item.languageName);
        console.log(arr);
    }
)