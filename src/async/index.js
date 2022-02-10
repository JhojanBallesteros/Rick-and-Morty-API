const doSomethingAsycn = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Do something Async'), 3000): reject(new Error('Text error'))
    })
}

const doSomething = async() => {
    const something = await doSomethingAsycn()
    console.log(something);
}

console.log('before');
doSomething();
console.log('After')

const aontherFunction = async() => {
    try {
        const something = await doSomethingAsycn();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('before 1');
aontherFunction();
console.log('After 1')