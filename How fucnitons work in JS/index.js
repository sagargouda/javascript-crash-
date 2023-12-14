var x = 2000;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
}

function b() {
  let x = 100;
  console.log(x);
}
