const applyDamage = (damage, currentHP) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newHP = currentHP - damage

            if (newHP <= 0) {
                reject(`The player suffers ${damage} points of damage and has fallen unconscious.`)
            } else {
                resolve(`The player suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
            }

        }, 1000)
    })
}

// Don't touch below this line

function runApplyDamageTest(damage, currentHP) {
    console.log(`Applying ${damage} damage to player with ${currentHP} HP...`)
    applyDamage(damage, currentHP).then((message) => {
        console.log(`...applyDamage resolved with: ${message}`)
    }).catch((message) => {
        console.log(`...applyDamage rejected with: ${message}`)
    })
}

const time = 2000;

async function executor() {
    runApplyDamageTest(27, 50)
    await takeSleep(6000)
    runApplyDamageTest(50, 50)
    await takeSleep(time)
    runApplyDamageTest(110, 100)
    await takeSleep(time)
    console.log("finish execution");

}

executor();

function takeSleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
