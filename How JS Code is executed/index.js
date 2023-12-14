var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

//?? argument object

function exampleFunction() {
  console.log(arguments[0]); // Accessing the first argument passed to the function
  console.log(arguments.length); // Getting the number of arguments
  console.log(arguments); // Displaying the entire arguments object

  // Note: In modern JavaScript and ES6+, it's preferable to use rest parameters for a similar purpose.
}

exampleFunction("Hello", 42);

//??

function exampleFunction() {
  console.log(arguments[0]); // Accessing the first argument passed to the function
  console.log(arguments.length); // Getting the number of arguments
  console.log(arguments); // Displaying the entire arguments object

  // Note: In modern JavaScript and ES6+, it's preferable to use rest parameters for a similar purpose.
}

exampleFunction("Hello", 42);
//??
// In this example, arguments allows you to work with the values ('Hello' and 42) passed to the exampleFunction function, even though the function doesn't explicitly define any parameters.

//In this case, arguments would contain ['Hello', 42], even though the function exampleFunction doesn't have any parameters defined in its declaration. This provides a way to work with variable numbers of arguments within a functio
