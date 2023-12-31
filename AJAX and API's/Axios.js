axios.get("https://swapi.dev/api/people/1/")
.then((res) => {
    console.log("Response: ", res)
})
.catch((e) => {
    console.log("Error!", e)
})

// Now putting this into use for async functions


const starWarsPerson = async(id) => {
    try{
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
    console.log(res.data)
    }
    catch(e){
    console.log("ERROR", e)
    }
}
starWarsPerson(4)
starWarsPerson(7)
// We can change the number as we wish


// Dad Joke api
// Different APIs very in the way they present information, some directly show the data in a Json format and others just show the html form of it in which case
// we have to apply the JSON format to it
// But to figure out this about APIs, it's necessary to read the documentation of the API before working.



const jokes = document.querySelector("#jokes")
const button = document.querySelector("button")

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    // console.log(jokeText)
    const newLI = document.createElement("li")
    newLI.append(jokeText)
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try{
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke
        // console.log("Here's your dad joke", res)
        // console.log(res.data.joke)
    }
    catch(e){
        console.log("Uh oh, looks like a laugh wasn't in your luck today", e)
    }
}

button.addEventListener("click", addNewJoke)