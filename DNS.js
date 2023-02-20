function getDomainNameFromURL(url) {

    const urlConstructor = new URL(url);

    return {
        protocol: urlConstructor.protocol,
        hostname: urlConstructor.hostname
    }
}

// don't touch below this line

const bootdevURL = 'https://boot.dev/learn/learn-python'
const url = getDomainNameFromURL(bootdevURL)
console.log(url);
console.log(`The domain name is ${url.hostname} and using  ${url.protocol} protocol `)
