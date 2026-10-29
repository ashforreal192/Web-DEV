// Open the HTML page to execute. (Important)
// and once the pop up appears, write new on it to add anything to the list.
// (Even if you're adding it for the first time the page opens, don't just start writing down. Write "new" first)
// Then write "list" to view the list and after than "q" to exit once the list is done.
// This is the order of how to use this web page. To restart the process, refresh the page. Which would also delete the list previously made.

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
    // To delete an entry
    else if (input === "delete") {
        const remove = prompt("Which task would you like to delete?") // You should enter the actual serial number from the list (starting from 1) as you see it when you type "list". Because of that const todo = [""] you wrote at the very beginning of your code.
        // By putting an empty string "" at the 0 index of your array, the very first actual task the user types gets pushed to index 1.
        if (isNaN(parseInt(remove))) {
            console.log("Write the serial no. of the task to be deleted.")
        }
        else {
            const deleted = todo.splice(remove, 1)
            console.log(`${remove}: ${deleted[0]} - has been deleted from the list`)
        }
        // Input Validation: prompt() always returns a string. parseInt() attempts to turn it into an integer.
        // If the user types letters instead of a number, parseInt() results in NaN (Not a Number).
        // isNaN() checks for this specifically, preventing the code from trying to delete an invalid index.
        // Array Mutation: splice(startIndex, deleteCount) removes elements directly from the original array.
        // Return Extraction: splice() always returns an *array* of the removed items (e.g., ["Buy groceries"]).
        // We use deleted[0] to extract just the string text so it looks clean in our confirmation log.
    }
    input = prompt("What would you like to do?")
}
console.log("Okay. No more tasks")