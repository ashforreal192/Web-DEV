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
        if(!color){
            reject("Color required")
        }
        else{
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve(`Background changed to ${color}`)
        }, delay)
        }
    })
}

// delayedColorChange("red", 1000)
// .then((msg) => {
//     console.log(msg);    
//     delayedColorChange("orange", 1000)
// })
// .then((msg) => {
//     console.log(msg)
//     delayedColorChange("teal", 1000)
// })
// .then(() => {
//     console.log(msg)
//     delayedColorChange("green", 1000)
// })
// .then(() => {
//     console.log(msg);    
//     delayedColorChange("blue", 1000)
// })
// .then(() => {
//     console.log(msg);        
//     delayedColorChange("violet", 1000)
// })
// .catch((err) => {
//     console.log("Error:", err)
// })


// Now using async and await:

async function rainbow() {
    try{
    await delayedColorChange("red", 1000)
    await delayedColorChange("orange", 1000)
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("blue", 1000)
    await delayedColorChange("indigo", 1000)
    await delayedColorChange("violet", 1000)
    return "All done!"
    }
    catch(e){
        console.log(e, "Caught error");
        throw e     
    }
}

// We can apply then after an entire function is executed completely as well. (Uncomment the code below to see)
// rainbow().then(() => console.log("End of rainbow!"))

// OR
async function waitForRainbow() {
    try {
        let message = await rainbow()
        console.log(message);    
        console.log("End of rainbow!")
    }
    catch(e){
        console.log(e, "Error in waitForRainbow");
        
    }
}
// Basically the same code as before.