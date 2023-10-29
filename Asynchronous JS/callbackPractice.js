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



const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
document.body.style.backgroundColor = newColor
doNext()
    }, delay)
}

delayedColorChange("red", 2000, () => {
    delayedColorChange("teal", 2000, () => {
    delayedColorChange("yellow", 2000, () => {
    delayedColorChange("black", 2000, () => {
})
})
})
})

// Remember that all that matters is setting the variables and knowing where they would end up mapping themselves. The logic stays the same.