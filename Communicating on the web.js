/**
 * Assignment
I wrote the getItemData() function for you. It retrieves items from Fantasy Quest's servers via HTTP.

I also wrote a logItems() function for you, call it with the items variable we are getting back from the getItemData() as a parameter.

 *///____________________________________________________________________________________________________//

const apiKey = generateKey();

/**
 * We have created a main function in order to wrap the code that uses await in an async function 
 */

async function main() {
    const items = await getItemData();
    logItems(items);
}

main();

/**
 * Refactoring the code means changing its structure or implementation in order to make it more efficient, readable, or maintainable. In this case, one way to refactor the code would be to remove the await keyword and handle the fetch response as a promise, like this:
 */

// getItemData()
//     .then(items => logItems(items))
//     .catch(error => console.error(error));     

// Either this line of code or above line of code. Don't use both promise and async/await simultaneously //

// don't touch below this line

async function getItemData() {
    const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

function generateKey() {
    const characters = 'ABCDEF0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
       
    }
    return result;
}

function logItems(items) {
    for (const item of items) {
        console.log(item.name);
    }
}
