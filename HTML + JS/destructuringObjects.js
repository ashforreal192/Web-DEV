const personOne = {
    name: 'Kyle',
    age: 23,
    address:{
        city: 'Texas',
        state: 'Noida'
    }
}

const personTwo = {
    name: 'Osama',
    age: 25,
    address:{
        city: 'Al Habibi',
        state: 'Dubai'
    }
}

const {name: fName, age: aliveFor} = personTwo
console.log(fName)
console.log(aliveFor)




// One more example
const course = {
    courseInstructor: "Shatodru",
    courseName: "Guitar tutorials"
}

const {courseName: CN, courseInstructor: CI} = course
console.log(CN);
console.log(CI);
