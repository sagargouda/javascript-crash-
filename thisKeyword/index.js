"use strict";
//!! This in global scope
//?? this is in window object
// this.name = "sagar";
//?? this inside object
// let john = {
//   table: "john's table",
// };
//?? here we can't do this.john.table because it is private it won't be in window object it will be just john.table

//?? this in method
//?? i am here trying to clean john's table so this we use in object
// let john = {
//   table: "john's table",
//   cleanTable() {
//     console.log(`cleaning ${this.table}`);
//   },
// };
// john.cleanTable();

//?? this inside a fucntion

// const cleanTable() = function () {
//  console.log(`cleaning ${this.table}`);
// }

// cleanTable.call(this);

//?? we dont havre this inside normal function

// treating functions as objects in JavaScript provides a high level of flexibility and enables powerful programming paradigms, such as functional programming and the use of higher-order functions

//?? this inside an inner fucntions

// this.table = "window table";

// const cleanTable = function (soap) {
//   const that = this;
//   const innerFunction = function (soap) {
//     let name = "sagar";
//     console.log(`cleaning ${that.table} of ${name} using ${soap}`);
//   };
//   innerFunction(soap);
// };
// cleanTable.call(this, "some soap");

//?? we get error because we can't use this eyword inside inner fucntion and reason is When an inner function is defined inside another function, it creates a closure that captures the variables and the scope of the outer function. However, the this value is not captured in the same way. to solve this we can use bind method or arrow fucniton or we can use self for example

//?? inside a class
// class room {
//   constructor(name) {
//     this.table = `${name} table`;
//   }
//   cleanTable(soap) {
//     console.log(`cleaning ${this.table} using ${soap}`);
//   }
// }

// const sagar = new room("sagar");
// sagar.cleanTable("medimix");

//?? Problem
// class Student {
//   static count = 0;
//   constructor(name, age, phoneNumber, boardMarks) {
//     this.name = name;
//     this.age = age;
//     this.phoneNumber = phoneNumber;
//     this.boardMarks = boardMarks;
//     Student.increaseStudentCount();
//   }
//   eligible() {
//     if (this.boardMarks >= 40) {
//       console.log("eligible");
//     } else {
//       console.log("not eligible");
//     }
//   }
//   static increaseStudentCount() {
//     this.count++;
//   }
//   static printStudentcount() {
//     console.log(this.count);
//   }
// }
