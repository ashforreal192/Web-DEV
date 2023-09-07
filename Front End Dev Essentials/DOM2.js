var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

btn.addEventListener("mouseenter", function () {
    btn.style.backgroundColor = "#c6ac8f"
})
btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "white"
})

var bulbStatus = 0
btn.addEventListener("click", function () {

    if (bulbStatus == 0) {
        bulb.style.backgroundColor = "yellow"
        btn.innerHTML = "ON"
        bulbStatus = 1
    }
    else {
        bulb.style.backgroundColor = "black"
        btn.innerHTML = "OFF"
        btn.style.backgroundColor = "white"
        bulbStatus = 0
    }
    
})