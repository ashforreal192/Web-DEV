let input = prompt("What would you like to do?")
const todo = [""]
while (input !== "quit" && input !== "q") {

// Views the list of whatever's been entered by the coder
    if (input === "list") {
        console.log("********")
        for (let i = 1;
            i < todo.length;
            i++
        ) {
            console.log(`${i}: ${todo[i]}`)
        }
        console.log("********")
    }
// To enter a new todo
    else if (input === "new") {
        const newtodo = prompt("What is the new todo?")
        todo.push(newtodo)
        console.log(`${newtodo} added to the list`)
    }
    else if (input === "delete") {
        const remove = prompt("Which task would you like to delete?")
        if (isNaN(parseInt(remove))) {
            console.log("Write the serial no. of the task to be deleted.")
        }
        else {
            const deleted = todo.splice(remove, 1)
            console.log(`${remove}: ${deleted[0]} - has been deleted from the list`)
        }
    }
    input = prompt("What would you like to do?")


}
console.log("Okay. No more tasks")