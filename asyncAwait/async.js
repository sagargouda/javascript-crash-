// //?? it is a async fucntion , async fucntion always return a promise
// async function getData() {
//   //?? if yotu don't return a promise , if you written a string or value then async will wrap this value inside a promise and return it for you
//   return "sagar";
// }
// //?? it will return a promise
// const data = getData();
// console.log(data);
// //?? as data is promise
// data.then((res) => console.log(res));

//?? what if i return promise

// const sagar = new Promise((res, rej) => {
//   setTimeout(function () {
//     res("kya bolte");
//   }, 5000);
// });

// async function getData() {
//   return sagar;
// }

// getData().then((res) => console.log(res));

//?? async and await combo is used to handle promises

// const p = new Promise((res, rej) => {
//   res("Promise Resolved");
// });

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();

//?? diffrence between normally handling prmises and async and await

//?? our promise will resolve after 10 second

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("after 0 second");
//   }, 0);
// });
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("after 10 second");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("after 5 second");
//   }, 5000);
// });

// //?? normal behaviour of promises , prolem with this as js is asynchronouys it first logs sagar first then the async tasks
// // function getData() {
// //   p.then((res) => console.log(res));
// //   console.log("sagar");
// // }
// // getData();

// //?? using async and await , but here js will wait and after printing prada it prints hey sagar , it happens beacuse our js engine was waiting for promise to resolve
// async function getData() {
//   const prada = await p1;
//   console.log(prada);
//   console.log("hey sagar");

//   const prada1 = await p2;
//   console.log(prada1);
//   console.log("hey reddy");

//   const prada2 = await p3;
//   console.log(prada2);
//   console.log("hey sagar-reddy");
// }
// getData();
//?? if i add clg("hello") we get it instantly beacuse it is above await
//?? if i do it 2 times , they will print at a time , why it doesn't i print after 5 second but it pritnts after 10 seconds , so it depends  on the placement of await if 5 seconds was called 1st then it priunts after 5 seconds  , but we called 10 seconds so it waits 10 seconds

//?? when we reverse the order in async await or in promise side only then evrythig changes.

//!! real world async await example

// const API_URL = "https://api.github.com/users/akshaymarch7";

// async function handleP() {
//   const data = await fetch(API_URL);

//   //?? fetch gives you a response object and you have to read it right and now you have to conbvert it into a .json form again it is also a promise
//   const jsonValue = await data.json();
//   console.log(jsonValue);
// }
// handleP();

//?? handl promise started executiong and it goes to data variable see a await so it the fucntion gets suspended and then it again goes to callstack after resolving and continues where it left and it again sees await and same thging

//!! error handling in async and await (we don't have catch here like then , catch ) we have try and catch

// const API_URL = "https://api.github.com/users/akshaymarch";

// async function handleP() {
//   try {
//     const data = await fetch(API_URL);

//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (err) {
//     console.log();
//   }
// }
// handleP();

//?? another way to catch error
const API_URL = "https://api.github.com/users/akshaymarch";

async function handleP() {
  const data = await fetch(API_URL);

  const jsonValue = await data.json();
  console.log(jsonValue);
}
handleP().catch((err) => console.log(err));

//?? both are same

//!! async / await vs .then and .catch

//?? async and await is just a syntatic syntax for then and catch behind teh scenees js will treat it has then and catch only

//?? sometimes async await writing make more sense and also here we avodi making promise chaining
