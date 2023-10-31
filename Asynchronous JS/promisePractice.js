const fakeRequestPromise = (url) => {
    // Implement the fakeRequestPromise function logic here
    // Return a promise, simulate an API call, etc.
    // For example:
    return new Promise((resolve, reject) => {
        // Simulate a request to the given URL
        if (url === 'yelp.com/api/coffee/page1') {
            resolve(); // Resolve the promise if successful
        } else {
            reject(); // Reject the promise if unsuccessful
        }
    });
}


// fakeRequestPromise('yelp.com/api/coffee/page1')
// .then(() => {
//     console.log("Worked!!!!")
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//     .then(() => {
//         console.log("Worked2!!!")
//         fakeRequestPromise('yelp.com/api/coffee/page3')
//         .then(() => {
//             console.log("Worked3!!!")
//         })
//         .catch(() => {
//             console.log("Didn't work 3")
//         })
//     })
//     .catch(() => {
//         console.log("Didn't work 2")
//     })
// })
//     .catch(() => {
//         console.log("Didn't work")
//     })


fakeRequestPromise('yelp.com/api/coffee/page1')
.then(() => {
    console.log("Worked!!!")
    return fakeRequestPromise('yelp.com/api/coffee/page2')
})
.then(() => {
    console.log("Worked2")
    return fakeRequestPromise('yelp.com/api/coffee/page3')
})
.then(() => {
    console.log("Worked3")
})
.catch(() => {
    console.log("Something went wrong.")
})