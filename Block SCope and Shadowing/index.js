//

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// console.log(a);
//?? we get block scope (let,const) and a is hosited in global scope
//?? we can't access let and const

//!! shadowing in js
var a = 100;
{
  var a = 10;
  let b = 30;
}
console.log(a);

// because both a is pointing in same memory location

//?? illegal shadowing (error)
let a = 30;
{
  var a = 30;
}

//?? perfectly valid
let a = 30;
{
  let a = 30;
}

var a = 30;
{
  let a = 30;
}
