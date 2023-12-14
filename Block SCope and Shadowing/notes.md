1. block is defined by curly braces {

} 2) block is also known as compund statment 3) block is used for combining multiple js statment in group , we group this togther in a block so that we can use it so where js expect one statment
ex:
if(true) ==> it is statement error because itr expects a sttment

4. but if we want multple statments we need block

5) block scope = what all variables and function we can access inside block

6) let and const are in block scope
7) shadowing
   var a = 100;
   {
   var a = 10;
   let b = 30;
   }
   console.log(a);

// inner a variabloe shadowed outer varaiable

8)var is globally scoped.
let and const can be global or block-scoped depending on where they are declared. They are global if declared in the global space and block-scoped if declared inside blocks.
