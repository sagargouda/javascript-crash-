1. promise can either be resolved or rejected

2) we use catch for failure callbaacks
3) Inversion of control=In simple terms, Inversion of Control (IoC) means letting someone else (like a framework or system) take charge and control the flow of a program, instead of the program itself deciding everything. It's like giving control to a higher authority that knows when to call your code. This can make the program more flexible and easier to manage.IoC, when applied to callbacks, means that your code is not in control of when a callback is executed; it depends on external events or functions. This can make the code harder to reason about and maintain.

4) by design fetch function wil return us a promise

5) callbacxks are not inherntly asynchronous , they are just fucntions passed as arguments to other fucntions they can be both synchronous and asyncrnous

6)console.log("start");
const sgar = new Promise(function (res, rej) {
console.log("1");
});
console.log("end");
=> answer
start
1
end

Promises become asynchronous when they are used to handle asynchronous operations

The Promise constructor and the methods like then and catch are synchronous.

7. promise object are immutable

8) async functions will return promise
9) to creatre a new promise we use new keyword and a promise constructor and this constructor will have a fucntion that have resolve and rejecvt as parameters
   10)promise also has catch method which where we can attach faiulure callback
10) whenever writing or consuming any promise make sure you wite both catch and then
11) we can return data or a promise
12) you can play with only catch like moving upwards only for one then
