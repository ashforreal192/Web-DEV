fetch("https://swapi.dev/api/people/1/")
.then(res => {
    console.log("Resolved!!", res)
    return res.json()
})
.then((data) => {console.log("Json done!!", data)
return fetch("https://swapi.dev/api/people/2/")
})
.then(res => {
    console.log("second request resolved!!!", res)
    return res.json()
})
.then((data) => {
    console.log(data)


    
    console.log("BREAK!!!!!!!!!!!!!")
    console.log("BREAK!!!!!!!!!!!!!")
    console.log("BREAK!!!!!!!!!!!!!")
    console.log("BREAK!!!!!!!!!!!!!")
    // This breaks is only being printed so that it separates itself from the code below
})
.catch(rej => {
    console.log("Error!!", rej)
    console.log("BREAK!!!!!!!!!!!!!")
    console.log("BREAK!!!!!!!!!!!!!")
    console.log("BREAK!!!!!!!!!!!!!")
    console.log("BREAK!!!!!!!!!!!!!")
})



// OR we can use async to refactor this code into an easier version



const loadStarWarsPeople = async() => {
    const res = await fetch("https://swapi.dev/api/people/1/")
    const data = await res.json()
    console.log(res)
    console.log(data)
    const res2 = await fetch("https://swapi.dev/api/people/2/")
    const data2 = await res2.json()
    console.log(res2)
    console.log(data2)
}

loadStarWarsPeople()