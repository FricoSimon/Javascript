async function getUser () {
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()

    console.log(data)
}

// getUser()

const fetchs = async () => {
    try {
        const response = await fetch('https://api.github.com/users/octocat')
        const data = await response.json()
    
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

fetchs()
