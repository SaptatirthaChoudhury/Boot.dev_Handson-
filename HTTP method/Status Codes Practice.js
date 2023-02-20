async function getUserCode(url, apiKey) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey
        }
    })
    return {
        status: response.status,
        jsonValue: await response.json()
    }
}
// Don't touch below this line

const generatedKey = generateKey()

async function execute() {

    console.log(generatedKey);

    const invalidId = 'invalid-id'
    const codeFirst = await getUserCode(`https://api.boot.dev/v1/courses_rest_api/learn-http/users/${invalidId}`, generatedKey)
    // console.log(`id: ${invalidId}, status code: ${codeFirst}`)
    console.log(codeFirst);

    console.log("___________________________");

    const validId = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'
    const codeSecond = await getUserCode(`https://api.boot.dev/v1/courses_rest_api/learn-http/users/${validId}`, generatedKey)
    // console.log(`id: ${validId}, status code: ${codeSecond}`)
    console.log(codeSecond);

}

execute();

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return result
}
