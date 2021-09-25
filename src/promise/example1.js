const promise = new Promise((resolve,reject) => {
    resolve('The promises');
});

promise.then(result => `${result} are`)
    .then(result => `${result} awesome`)
    .then(result => console.log(result));