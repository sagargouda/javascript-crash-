1. scope = where i can access specific variable or function
   // 2 scenerios
   i)what is scope of this variable b = where can i access this variable b
   ii) is b inside the scope of function c = can i access b inside funciton c

2) scope is directly dependent on lexical envrironment

3) whenever EC created a lexical environment is also craeted

4) lexical environment = it is local memory along with refrence to lexical environment of parent(lexical parent)
5) lexical = heirarechy or sequence or in order
6) c function is lexical inside a fucniton
7) a is lexically inside global scope
8) the mechansism of finding the varaiable in local memory and lexical parent's memory and continuation is called scope chain

9) scoping = how our programs's variables are organized and accessed

10) lexical scoping = scoping is controlled by placement of functions and blocks in code

11) scope = space or environment in which certain varaible is decalared
    i) global scope , fucniton scope , block scope

12) scope of a variable = region of code where certain varaible can be accessed

13) global scope = outside of any fucntion or block , variables declared in global scope are accessble everywhere

14) fucniton scope = varaiable are accessible only inside fucntin not outside , also called locals scope

15) block scope = variables are accessible only inside block , it only applies for let and const , fucnitons are also block scoped in strict mode

16) scope chain vs call stack
    scope chain = order in which fucnitons are written in code
    call stack = order in which funcitons are called

\*) so scope chain has nothing to do with order in which fucntions were called
