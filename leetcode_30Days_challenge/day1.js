/* Write a function createHelloWorld. It should return a new function that always returns "Hello World". */


// fthis function returns hello world
const helloWorld = () => {
    return 'Hello World';
};

// this function return the fuction that prints hello world
var createHelloWorld = () => {
    return helloWorld();
};

console.log(createHelloWorld());
