1. empty file is shoirtest program
2. even though file is empty , still js does more things
3. what happens is GEC is created and also sets up memory space
4. js engine also creates something callled window

5) window is like a big object with many methods and fucntions created by js engine
6) js engine also craetes this keyword
7) at global level this points window
8) window is a global object which is created along with GEC
9) whenevr a progarm is run a GEC , global object and "this" is created
10) global object in case of browsers is window
11) global object in case of node is global

12) at global level this === window(global object)
13) this is created even for funcitonal execution context also
14) Global space = any code you write which not in fucntion
15) when you create something inside
    global space they get attached to global object only for var variables not let and const
