// Nesting callbacks


// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'black'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'grey'
//         },1000)
//     },1000)
// },1000)


// Or we could do the same thing like:



// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
// document.body.style.backgroundColor = newColor
// doNext()
//     }, delay)
// }

// delayedColorChange("red", 2000, () => {
//     delayedColorChange("teal", 2000, () => {
//     delayedColorChange("yellow", 2000, () => {
//     delayedColorChange("black", 2000, () => {
// })
// })
// })
// })

// Remember that all that matters is setting the variables and knowing where they would end up mapping themselves. The logic stays the same.



// An even more efficient way:

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

// delayedColorChange("red", 1000)
// .then(() => delayedColorChange("orange", 1000))
// .then(() => delayedColorChange("teal", 1000))
// .then(() => delayedColorChange("green", 1000))
// .then(() => delayedColorChange("blue", 1000))
// .then(() => delayedColorChange("violet", 1000))


// Now using async and await:

async function rainbow() {
    await delayedColorChange("red", 1000)
    await delayedColorChange("orange", 1000)
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("blue", 1000)
    await delayedColorChange("indigo", 1000)
    await delayedColorChange("violet", 1000)
    return "All done!"
}

// We can apply then after an entire function is executed completely as well. (Uncomment the code below to see)
// rainbow().then(() => console.log("End of rainbow!"))

// OR
async function waitForRainbow() {
    await rainbow()
    console.log("End of rainbow!")
}
// Basically the same code as before.



// Just a random info:
// Await can also be stored in a variable

async function makeTwoRequests() {
    try{
    let data1 = await fakeRequest('/page1')
    console.log(data1)
    let data2 = await fakeRequest('/page2')
    console.log(data2)
    } catch(e){
    console.log("Caught an error!")
    console.log("Error is:", e)    
    }
}