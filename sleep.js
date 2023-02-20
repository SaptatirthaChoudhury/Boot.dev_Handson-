const time = 3000; // time in milliseconds

function sleep(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(`resolve after ${ms} miliseconds`), ms))
}

sleep(time).then((val) => {
    console.log(val);
})