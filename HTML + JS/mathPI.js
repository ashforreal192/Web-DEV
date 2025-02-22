console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nahi hai");
        
    }
}

Object.defineProperty(chai, "name", {
    enumerable: false // enumerable: If false, the property won't show in loops.
    // writable: If false, the value cannot be changed.
    // configurable: If false, the property cannot be deleted or reconfigured.
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") { // Filters out functions (orderChai is ignored)
        console.log(`${key} : ${value}`); // name of chai won't be visible as enumarable for it is set to false
    }
}