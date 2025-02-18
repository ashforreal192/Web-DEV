// The filter() method in JavaScript is used to create a new array containing only the elements that pass a given condition.
// It does not modify the original array.

// Syntax:
// array.filter(callback(element, index, array), thisArg)
// callback → A function that is applied to each element in the array.
// element → The current element being processed.
// index (optional) → The index of the current element.
// array (optional) → The original array being processed.
// thisArg (optional) → A value to use as this inside the callback function.

const myNums = [1, 2, 3, 4, 5, 6, 7]

const newNums = myNums.filter((num) => num>3) // This actually returns the value as opposed to forEach
console.log(newNums);

// OR:

const newNums2 = myNums.filter((num) => {
    return num > 2 // Have to use return keyword when we open a scope {}
})
console.log(newNums2);



// In case of arrays with object as each element
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History' && bk.publish >= 1995)
  console.log(userBooks);