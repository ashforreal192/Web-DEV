const fakeRequest = (URL) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if(rand < 0.7){
                resolve("Your fake data here")
            }
            reject("Request Error")
        }, 1000)
    })
}

// Using then/catch: (More often used when there is a promise already involved)

fakeRequest("/dogs/1")
.then((data) => {
console.log("Done with request")
console.log("data is:", data)
})
.catch((err) => {
    console.log("Oh no", err)
})



// Using try/catch. Uncomment to understand code:

// async function makeRequest() {
//     try {
//         const data = await fakeRequest("/dogs1")
//         console.log("Done with request")
//         console.log("Data is:", data)
//     } catch (error) {
//         console.log(error);        
//     }
// }