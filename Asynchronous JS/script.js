// Examples of Asynchronous JS codes:

// setTimeout
// setInterval
// promises
// fetch
// axios
// XMLHttpRequest

// And if any code is being written which dosen't contain any of the aforementioned codes, then it's a synchronous code.

// Demo of an async coe:
console.log("hey")
setTimeout(function(){
    console.log("hey2")
}, 2000)
// hey2 will print 2000 ms or 2 secs after hey is printed. Check in console.
// The function which contains hey2 is called 'callback function' because it is called after the duration set by the coder.


// There exists two kind of stacks: Main stack and Side stack
// IF there are four codes to execute and two of them are sync while the other two are async
// The syncs will be moved to the main stack
// The asyncs will be moved to the side stack
// Once the main stack becaomes empty after the syncs are done being executed, the side stack is asked if they have completed their executions in the background.
// If yes, then the code which is done being executed will be brought to the main stack from the side stack and this process goes on until all codes are executed.
// And the interaction between main and side stack is done by something called "EVENT LOOP".


// JS is single threaded. as opposed to multi threaded. Which means that JS only handles a single computation at a single time.


// Callbacks
// The above mentioned examples of async codes are used to send the request to third parties for their data. But once those datas are recieved, those datas have
// to be called back.
// So theey basically start working when async codes are finished being executed.
// Some examples of callback functions are:
// then catch
// callbacks
// async await


// Promise
// User will ask for a number between 0 and 9, if the number is below 5, then resolve, if not, reject
// then relates to resolve
// catch relates to reject
// Demonstration:

var ans = new Promise((res,rej)=>{
    
    var n = Math.floor(Math.random()*10);

    if(n<5){
        return res();
    }
    else{
        return rej();
    }
})

ans.then(function(){
    console.log("below")
})
.catch(function(){
    console.log("above")
})



// Demo 2
// Some sequnce of activities to be completed one by one:
// 1. First, come home
// 2. Open the gate and then close it
// 3. Cook food and eat it
// 4. Sleep

var answer= new Promise(function(resolve, reject){
    return resolve("1. First, come home")
})

var p2 = answer.then(function(data){
    console.log(data);
    return new Promise(function(resolve,reject){
        return resolve("2. Open the gate and then close it")
    })
})

var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(resolve,reject){
        return resolve("3. Cook food and eat it")
    })
})

var p4 = p3.then(function(data){
    console.log(data)
    return new Promise(function(resolve,reject){
        return resolve("4. Sleep")
    })
})

p4.then(function(data){
    console.log(data)
})



// async await
// Demo
async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let anss = await raw.json()
    console.log(anss)
}
abcd()