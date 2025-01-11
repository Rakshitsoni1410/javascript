const PromiseOne = new Promise(function (resolve, reject) {
    // do async task 
    // db call, cryptography, network call etc
    setTimeout(function() {
        console.log('Async task is complete');
        resolve(); // Call resolve to fulfill the promise
    }, 1000);
});

PromiseOne.then(function() {
    console.log("promise consumed");
}); 