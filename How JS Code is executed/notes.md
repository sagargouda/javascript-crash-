1. When we run a program An GEC is created
2. EC is created in 2 phases
   i) memory creation phase
   ii) code execution phase

3) In first Js will allocate mmeory to all variables and functions
4) and in that memory space it stores something called undefined for time being or in the firtst skim of code
5) in case of function it stores whole code
6) undefined is like a placeholders
7) In phase 2 it is code execution phase , js will runs through whole code lines by lines
8) so for variables it takes off undefined and place the actual value
9) when fuction is now invoked another execution context is created
10) it again has 2 components memory and code components and again 2 phase i) memory creation phase ii) code execution phase
11) here now parameters also be in memory phase
    placed with undefined intially
12) whenever it sees return , control goes to the place where fucntion was invoked
13) after returning , ec will be deleted from call stack
14) so call stack is nothing but managing execustion contetxt
15) call stack = it maintains order of execution of executioon context
16) call stack is also known by
    i) execution context stack
    ii) program stack
    iii) control stack
    iv) runttime stack
    v) machine stack

17) In execution conbtext these are present(in memory creation phase these are all generated)
    i) variable environment
    i) let , const , var decalration
    ii) fucntions
    iii) arguments object
    ii) scope chain
    iii) this keyword

18) Js engine = a program that exexcutes js code and it has call stack and heap
    i) call stack = EC
    ii) Heap = where our objects are stored

19) but in this keyword both this keyword and arguments object aren't present
