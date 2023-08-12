function add(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return false
    }
    let sum = x + y
    return sum
}
console.log(add(5, 7))
// Return actually holds the value of the function in itself