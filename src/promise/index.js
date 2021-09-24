const promise = new Promise((resolve, reject) => {
    console.log('one');
    resolve('three');
});

promise.then(value => console.log(value));

console.log('two');