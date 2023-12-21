///?? call , apply , bind revision
// const military = {
//   country: "india",
//   airForce: 234,
//   military: 6798,
//   navy: 456,
//   entire: [],
//   correct() {
//     console.log(
//       `${this.country} has Airforce strength of ${this.airForce} Millions and Military strength of ${this.military} Millions and Navy Strength of ${this.navy} Millions`
//     );
//     this.entire.push({
//       AirPower: `${this.airForce} Millions`,
//       MilitaryPower: `${this.military} Millions`,
//       NavyPower: `${this.navy} Millions`,
//       Total: `${this.airForce + this.military + this.navy} Millions`,
//     });
//   },
// };

// const china = {
//   country: "china",
//   airForce: 2364,
//   military: 67948,
//   navy: 4536,
//   entire: [],
// };

// // const correctChina = military.correct;
// // correctChina.call(china);

// //?? using bind
// const correctChina = military.correct.bind(china);
// correctChina();
// console.log(china.entire);
// console.log(china);

//!! callBack hell
// console.log(
//   setTimeout(function () {
//     console.log("sgar");
//   }, 1000)
// );
//?? as set timeout doesn't returning anything and we are consoleing it we get some curtrent number and after 1 sec we get sgar

//??

const cart = ["shoes", "pants", "kurta"];
//?? create order first then proceed to payment
// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.createRecipt(function () {
//       api.updateWallet();
//     });
//   });
// });
//?? when js engine see it excutes create order api first then it goes to proceed to payment. after this we also have to create recipt , so this is the flow , we also want to update wallet , so again same steps , so this is what we call callback hell , one callback inside other callback again , so it starts to grow hoirizonatally , so it is unmaintable and unreadble , it is always called pyramid of doom

//!! Inversion of control
//?? this is the another probelm we face using callbackd

//??
api.createOrder(cart, function () {
  api.proceedToPay();
});

//?? so here we take this callback proceed to pay and gave it to create order api , and expecting create order wil create order , we gave it control , but we don't know that create order may have bgs and we blindly trusted it , what if our callback never called , this is the problem we have called inverison of control
