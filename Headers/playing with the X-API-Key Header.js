const generatedApiKey = generateKey()  //->              // go to line no 59

const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72'

const newLocationData = {
    'discovered': false,
    'id': '52fdfc07-2182-454f-963f-5f0f9a621d72',
    'name': 'Bloodstone Swamp',
    'recommendedLevel': 10
}

async function execute() {
    const oldLocation = await getLocationResponse(generatedApiKey, url)  //->      // go to line no 34
    console.log(`Got old location:`)
    console.log(`- name: ${oldLocation.name}, recommendedLevel: ${oldLocation.recommendedLevel}`)
    console.log('---')

    const newGeneratedApiKey = generateKey()
    await putLocation(newGeneratedApiKey, url, newLocationData)  //->                // go to line no 46
    console.log('Location updated!')
    console.log('---')

    // const newGeneratedApiKey = generateKey()
    const newLocation = await getLocationResponse(newGeneratedApiKey, url)  //->       // go to line no 34
    console.log(`Got new location:`)
    console.log(newLocation);
    console.log(`- name: ${newLocation.name}, recommendedLevel: ${newLocation.recommendedLevel}`)
    console.log('---')
}

execute();


// don't touch below this line

async function getLocationResponse(apiKey, url) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

async function putLocation(apiKey, url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}
