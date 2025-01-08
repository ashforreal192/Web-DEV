// In arrays, the order matters. But in objects, it dosen't. 
// What matters is just that the required values are stored 
// under the right references in a way that they can be accessed when needed.
// Singletons are formed only when objects are created through constructors. In case of object literals, there are no singletons.



// Question:

// In index.js, you'll find a restaurant object that contains a name, address, city, state, and zipcode. 
// Your task to is to create a variable named fullAddress that 
// points to a string using the information from restaurant. 

// fullAddress should point to a string that includes the 
// address, city, state, and zipcode from the restaurant object. 
// Make sure to add any necessary commas or spaces between the 
// values as seen in the exact expected output format shown below.

// To make it harder to "cheat" by copy and pasting, 
// I've randomly generated the address portion.    
// For example, if address was "64 Johnson Ave", 
// the fullAddress variable would look like this:

// "64 Johnson Ave, Brooklyn, NY 11206"

// this is the expected output format of the fullAddress 
// string (keep an eye on the commas and/or 
// spaces between the values and match that too!)

const mySymbol = Symbol("key1") // THis varibale is declared to demonstrate how to insert a symbol in an object.

let restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    [mySymbol]: "myKey1", // For the data type to be a symbol, the key needs to be put inside square brackets. It won't
    // give an error otherwise but the data type wouldn't be a symbol, it would be a string instead.
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
// We created the full address as a sentence using this method:
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`
console.log(fullAddress)
// To access one particular value, we use:
console.log(restaurant.name)
// OR
console.log(restaurant["name"]) // Written as a string because the way JS works, a key is considered to be a string.
// This one is a better method.
console.log(restaurant[mySymbol])
console.log(typeof restaurant[mySymbol])
// Adding greetings to an object:
restaurant.greeting = function(){
    console.log("Hi viewers")
}
restaurant.greeting2 = function(){
    console.log(`Hello user, welcome to ${this.name}`)
}
console.log(restaurant.greeting())
console.log(restaurant.greeting2())


// Updating Objects
const marks = {
    Daniel: 79,
    Harold: 82
}
// The modification
marks.Harold = 80
// Now a method using which we can stop from an object from making any changes even if we code a modification:
Object.freeze(marks)
marks.Harold = 20
console.log(marks) // The marks will of Harold will be 80 but it won't modify to 20 as the object was frozen before that.

// Accessing spcific component from obects wrapped inside arrays
const comments = [
    {
        username: "nuzair", text: "ayy yoo!!!", likes: "144"
    },
    {
        username: "ash", text: "hell yeah!!!", likes: "200"
    }
]
console.log(comments[1].text) // O/P: "hell yeah!!!"



// Difference between a singleton object and a non-singleton object declaration:
const tinderuser = new Object() // Singleton obejct. Declared using a constructor.
const tinderuser2 = {} // Non-Singleton obejct
// Adding values in tinderuser2
tinderuser2.id = "123abc"
tinderuser2.name = "Samay"
tinderuser2.isLoggedIn = false
console.log(tinderuser)
console.log(tinderuser2)
// Printing just the keys:
console.log(Object.keys(tinderuser2)) // o/p is of data type array. A useful fact to remember
// Printing just the values:
console.log(Object.values(tinderuser2))
// Printing the entires individually.
console.log(Object.entries(tinderuser2))
// Asks if there is a particular key present in the object. Returns a boolean value.
console.log(tinderuser2.hasOwnProperty("isLoggedIn")) // True
console.log(tinderuser2.hasOwnProperty("isLoggedOff")) // False



// Nested objects:
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstName: "Hitesh",
        lastName: "Chaudhary"
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.lastName);



// Combining objects:
const obj1 = {
    1: "a", 2: "b"
}
const obj2 = {
    3: "c", 4: "d"
}

//Method 1
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);

// Method 2
const obj4 = Object.assign({}, obj1, obj2) // Same o/p but a better method because inside the assign method, the first object is the target object and the later ones are source objects which are always merged with the target one.
// So an empty object before the other ones guarantees that all the objects to be merged are treated as source objects.
console.log(obj4);

// Method3
const obj5 = {...obj1, ...obj2} // Spread method
console.log(obj5);


// Objects inside array:
const users = [
    {
        id: "id1",
        name: "name1"
    },
    {
        id: "id2",
        name: "name2"
    },
    {
        id: "id3",
        name: "name3"
    }
]
console.log(users[0].name)
console.log(users[1].id)