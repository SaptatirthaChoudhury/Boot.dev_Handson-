// function execute() {
//     applyDamage(25, 50).then(message => console.log(message))
//     console.log("hi");
// }
//________________________________________________________________________________

async function execute() {
    const message = await applyDamage(25, 50);
    console.log("waiting for message");
    return message;
}


async function main() {
    const Executor = await execute();
    console.log("waiting for executor");
    console.log(Executor);
}

main();
console.log("main finished");

function applyDamage(damage, currentHP) {
    return new Promise((resolve) => {
        const newHP = currentHP - damage
        setTimeout(() => {
            resolve(`The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
        }, 3000)
    })
}
