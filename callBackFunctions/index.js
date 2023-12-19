// function x(y) {}
// x(function y() {});
//?? y is known as call back fucntion
//?? x is higher order fucntion

// setTimeout(function () {
//   console.log("timer");
// }, 1000);
//?? first function is callback fuction , 2nd argument is number of seconds

//!! Blocking the main thread

// setTimeout(function () {
//   console.log("sagar");
// }, 1000);

// for (let i = 0; i < 1000000; i++) {
//   console.log(i);
// }

// document.querySelector("#btn").addEventListener("click", function () {
//   console.log("clicked");
// });

//?? this funciton is call back fucntion, when button is clicked it calls callback fucntion and it comes to call stack
