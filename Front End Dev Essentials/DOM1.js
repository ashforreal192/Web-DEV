// Selecting HTML
var a = document.querySelector("h1")
var b = document.querySelector("h2")


// Changing HTML
a.innerHTML = "Changed HTML"
// Second method for changing
document.querySelector("h2").innerHTML = "Changed h2"


// CHanging CSS
// As we know, var b = document.querySelector("h2")
b.style.color = "red"
b.style.backgroundColor = "violet"


// Event Listener
b.addEventListener("click", function () {
    console.log("Hey")
})
// Adding HOVER to h2
b.addEventListener("mouseenter", function () {
    b.style.cursor = "pointer"
    b.style.opacity = 0.5
})
b.addEventListener("mouseleave", function () {
    b.style.cursor = "default"
    b.style.opacity = 1
})