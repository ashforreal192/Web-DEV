// For not a number to number
let score = "33abs"
console.log(typeof score)
// console.log(typeof (score))
let valueInNumber = Number(score) // Converts score into number datatype
console.log(typeof valueInNumber);
console.log(valueInNumber); // Upon converting score into number, it does convert it even though valueInNumber is clearly NaN (Not a Number)


// For boolean to number
let score2 = true
console.log(typeof score2)
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3 = false
console.log(typeof score3)
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// For null to number
let score4 = null
console.log(typeof score4)
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

// For undefined to number
let score5 = undefined
console.log(typeof score5)
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);
