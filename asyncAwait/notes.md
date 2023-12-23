1. async = a keyword used before a fucntion to create asynchronous fucntion

2) await is the keyword which can only be used inside my async function , you can't wirte await outside of async fucntion you get syntax error

3) write await infront of a promise
4) In JavaScript, several functions and concepts return or involve Promises:

fetch: Used for making HTTP requests and returns a Promise.

axios: A library for HTTP requests that also returns a Promise.

Promise constructor: It can be used to create a new Promise for custom asynchronous operations.

setTimeout: While not directly returning a Promise, it can be combined with the Promise constructor for asynchronous behavior.

async/await: Keywords used for handling Promises in a more synchronous-looking manner. Functions marked as async return a Promise, and await is used to wait for a Promise to resolve.

Promise.all: A method that allows you to wait for multiple promises to resolve concurrently, returning a single Promise.

//!! interview tips

1. async = keyword for starting asynchtonous
2. await = it can be only used in async
