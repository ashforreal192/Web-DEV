// Array destructuring:
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers  = ['1', '2', '3', '4']

// the variables we choose does not matter, but where does variables correspondingly map into the given array position-wise is what matters
const [a] = alphabets
console.log(a)

const [,b,, d] = alphabets
console.log(b)
console.log(d)

const [,,c,,e, ...rest] = alphabets
console.log(c)
console.log(e)
console.log(rest)

// To merge the two given arrays. Or to basically concat them,
const newArray = [...alphabets, ...numbers]
console.log(newArray)
// Although since we can concat them already, this isn't used much or being able to do this dosen't exactly cause a lot of noticeable benefits for coders.


// Other uses:
function sumAndMultiply(a, b){
    return [a+b, a*b]
}
const [sum, multiply] = sumAndMultiply(4, 5)
console.log(sum)
console.log(multiply)
console.log(sum, multiply)

