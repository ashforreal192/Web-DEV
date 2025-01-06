let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(typeof (myDate)) // Object


let myCreatedDate = new Date(2023, 0, 24) // In JS, january is 0. Btw, this is how to specify a particular date
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())


let myCreatedDate2 = new Date(2023, 0, 24, 5, 3)
console.log(myCreatedDate2.toDateString())
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 = new Date("01-14-2023") // Dash is to be used to insert specific format. In this format, January is 01
console.log(myCreatedDate3.toDateString())
console.log(myCreatedDate3.toLocaleString())




let myTimeStamp = Date.now()
console.log(myTimeStamp) // Output will be the number of miliseconds spent since January 1, 1970 by default