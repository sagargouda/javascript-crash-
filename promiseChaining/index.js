// const bucket = ["hair", "water", "hot", "food"];

// createOrder(cart) //Order ID
//?? these are dependent on each other and they are asyncrhous

//?? if done by calllback
// createOrder(cart, function () {
//   proceedToPayment(orderId);
// });

//?? now it is responsible for create order api to create order but what if it doesn't call or we trust it too much , it is an inversion of control

//!! so the solution is promises, we will capture that promise and store it in a promise , promise is like empty object ,
// const promise = createOrder(cart);

//?? as soon as this line is executed and promise stores an object where data is undefined
// {data: undefined}

//?? as create order is asynchronous after some seconds it comes back with data which will be sent as a promise and stored in data
// {data: orderDetails}

//?? now after this we have a promise and now we wil attach a callback fucntion
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });
//?? now after getting a promise the callback fucntion is automatically called .
//?? in first case we used to pass callback fucntion but now we are attaching it to promise object

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// let url = [];
// const user = fetch(GITHUB_API);
// user.then(function (res) {
//   url.push(res.url);
//   console.log(url);
// });

// console.log("start");
// const sgar = new Promise(function (res, rej) {
//   console.log("1");
// });
// console.log("end");

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// const user = fetch(GITHUB_API);

// user.then((res) => res.json()).then((data) => console.log(data));

//!! solving callback hell (promise chainig)

// const promise = createOrder(cart);
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

//?? or

// const promise = createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return updateWalletBalance(paymentInfo);
//   });

//?? when  you're attaching lot of then , we have to pipe in like chain , data should pass down the chain or you can use arrow fucntion

//!!! creating a promise from scartch
// const cart = ["hair", "water", "hot", "food"];

// const promise = createOrder(cart);
// proceedToPayment(orderId);

//?? how does create order create a promise
//?? so creating producer part of promise
// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// function createOrder(cart) {
//   const promise = new Promise(function (resole, reject) {
//     // create an order
//     //validating cart
//     if (!validateCart(cart)) {
//       reject("Error hai bhai");
//     } else {
//       const orderId = "1234";
//       if (orderId) {
//         setTimeout(function () {
//           resole(orderId);
//         }, 5000);
//       }
//     }
//   });

//   return promise;
// }

// function proceedToPayment(orderId) {
//   //
//   return new Promise(function (res, rej) {
//     res("payment successfull");
//   });
// }

// function validateCart(cart) {
//   return true;
// }

//!! real life examples(promise chaining)

const cart = ["shoes", "pants", "kurtas"];
// api's
// createorder,
//  proceed to payment,
//  show ordersummary
// update list

// const promise = createorder(cart);
// promise
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .bind(proceedToPayment)
//   .then((summary) => console.log(summary));

// function createorder(cart) {
//   return new Promise(function (resolve, reject) {
//     const orderId = "34363";
//     resolve(orderId);
//   });
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (res, rej) {
//     const paymentInfo = "payment succesful";
//     res(paymentInfo);
//   });
// }

// function showOrderSummary(paymentInfo) {
//   return new Promise((res, rej) => {
//     if (paymentInfo == "payment succesful") {
//       const summary = `you purchased well and you're ${orderId} is ${paymentInfo}`;
//       res(summary);
//     }
//   });
// }

//!! Async and await
//?? when there is async you need to await
console.log("Person1: show ticket");
console.log("Person1: show ticket");

const promiseWife = new Promise(function (res, rej) {
  setTimeout(() => {
    res("ticket");
  }, 3000);
});

const getPop = promiseWife.then((t) => {
  console.log("husband: we should go in");
  console.log("wife: no i am hungry");
  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});
const getButter = getPop.then((t) => {
  console.log("husband: we should go in");
  console.log("wife: I need butter on my popcorn");
  return new Promise((resolve, reject) => resolve(`${t} butter`));
});

getButter.then((t) => console.log(t));
console.log("Person4: show ticket");
console.log("Person5: show ticket");
