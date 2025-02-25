// If we put async infront of a function, it returns a promise automatically.

// Structure examples:


// async function hello(){}

// OR

// const sing = async() => {}


const login = async(username, password) => {
    if (!username || !password)
    throw "Missing Credentials"

    if (password === "ricknmorty")
    return "Welcome"
    throw "Invalid Password"
}

login("agydygdwagiydaw", "ricknmorty")
.then((msg) => {
    console.log("Logged in!")
    console.log(msg)
})
.catch((err) => {
    console.log("Error!!!")
    console.log(err)
})