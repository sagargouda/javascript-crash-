1. promise = it is like a empty object with some data values , data value hold whatever tis create order api will return

2) promise is an object and then is an fucntion
   promise.then()

3) in callback we were passing callback fucntion directly to createorder fucntion and in promise we are attaching callback function to promsie object

4) so in example we used that same so as soon as create order api gets executed it gets stored in promise object as soon it is stored in object it immeditaly calls calback fucntion

5) promises gives that guarrantee , as soon as data in the promise it will call callback fucntion

6)by design fetch fucntion returns me a promise

7. state of a promise and result = result will store promise data and state of promise wil tell us what state the promise is in pending , fullfiled(current state) or rejected

8.console.log(
setTimeout(function () {
console.log("sagar");
}, 1000)
);
// here set timeout returns an id , which is not useful for most purpose ,

9.promise objects are immutable

10. //?? Interview question
    => promise object as a placeholder which wil be filled with a value;
    => promise is a container for future value
    =>promise is an object that represent the eventual completion of an asynchronous operation.

11) don't forget to use return promises or use arrow fucntion
