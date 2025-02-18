// reduce() Method in JavaScript
// The reduce() method in JavaScript is used to reduce an array to a single value by applying a callback
// function to each element in the array.

// Syntax:
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

// accumulator → Stores the result of previous iterations.
// currentValue → The current element being processed.
// currentIndex (optional) → The index of the current element.
// array (optional) → The original array being processed.

const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval){
    return acc + currval
})