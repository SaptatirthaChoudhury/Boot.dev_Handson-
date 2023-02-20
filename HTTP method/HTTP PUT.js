async function updateUser(baseURL, id, data, apiKey) {
    const fullURL = baseURL + "/" + id    // Either use this `${baseURL}/${id}` or stay on what is already there
    const response = await fetch(fullURL, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey
        },
        body: JSON.stringify(data)
    })

    return await response.json()
}

async function getUserById(baseURL, id, apiKey) {
    const fullURL = baseURL + "/" + id   // Either use this `${baseURL}/${id}` or stay on what is already there
    const response = await fetch(fullURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
           'X-API-Key': apiKey
        }
    })

    return await response.json()
}

// don't touch below this line

const userId = '2f8282cb-e2f9-496f-b144-c0aa4ced56db'
const generatedKey = generateKey()
const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

function logUser(user) {
    console.log(`User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, PVP Status: ${user.pvpEnabled}, User name: ${user.user.name}`)
}


async function execute() {
    const userData = await getUserById(baseURL, userId, generatedKey)
    console.log(userData);
    logUser(userData)

    console.log(`Updating user with id: ${userId}`)
    userData.characterName = 'Dellbiar'
    userData.level = 7
    userData.class = 'Warrior'
    userData.pvpEnabled = true
    userData.user.name = 'Allan'
    await updateUser(baseURL, userId, userData, generatedKey)

    const newUser = await getUserById(baseURL, userId, generatedKey)
    console.log(newUser);
    logUser(newUser)

}
execute()

