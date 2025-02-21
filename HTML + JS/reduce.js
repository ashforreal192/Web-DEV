// reduce() Method in JavaScript
// The reduce() method in JavaScript is used to reduce an array to a single value by applying a callback
// function to each element in the array.

// Syntax:
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

// accumulator → Stores the result of previous iterations.
// currentValue → The current element being processed.
// currentIndex (optional) → The index of the current element.
// array (optional) → The original array being processed.


// Array
const myNums = [1, 2, 3]


const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc : ${acc} and currval : ${currval}`);    
    return acc + currval
}, 0) // The number after the comma represents the number which we would want the initial value of the accumulator to be.
console.log(myTotal);

// OR same thing can be represented as:
const myTotal2 = myNums.reduce((acc, currval) => acc+currval, 0)
console.log(myTotal2);



// Object
const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "python course",
        price: 1000
    },
    {
        itemName: "data science course",
        price: 1500
    }
]
console.log(
    shoppingCart.reduce((acc, item) => {
    return acc+item.price
}, 0)
);