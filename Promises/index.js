const cart = ["shoes", "apple", "kurta", "shirt"];
//?? with callback fucntion
// createOrder(cart, function () {
//   proceedToPayment(orderId);
// });
//?? with promises
//{data: undefined}
// const promise = createOrder(cart);
// promise.then(function () {
//   proceedToPayment(orderId);
// });
//{data: orderOId}

//?? Real example

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

//?? callback hell is handled with promise chaining

// attach a promise to then than it is promise chaining
