/* 
// initialize promise 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promises work"), 1000) // async res
})

// call promise value from resolve
promise
.then((res) => {
    console.log(res)
    return res + " " + res
}) // chaining promises
.then((res) => {
    console.log(res)
}) 
*/

function getUsers (onSuccess) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(onSuccess) {
                resolve([
                    {id: 1, name: 'Jerry'},
                    {id: 2, name: 'Elaine'},
                    {id: 3, name: 'George'},
                ])
            } else {
                reject("error")
            }
        }, 1000)
    })
}

// call the function with promise
getUsers(true) // true of false
.then((res) => {
    console.log(res)
})
.catch((error) => {
    console.log(error)
})

