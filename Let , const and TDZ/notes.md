1. let and const are hoisted but they are in the TDZ for time being
2. why we get refrence error if let was hoisted

3) what happens is , js has allocated memory to a is undefined but it is in script (block scoped)

4) for let and const they are also allocated memiory but stored in separate memory space not in global and you can't access them before and you can acess it anywhere after intilisation

5) TDZ = it is time since when let variable was hoisted and intialized with some variable.

6) when you access a variable in TDZ it gives you refrenc error

7) refrence error = you know what it is
8) type error = assignment to const variable (const values should instialised and decalred togther)
9) syntax error = mssing syntax

10) inn window object also there is no let and const because they are not in global space

11) window and this won't work for let and const
12) you can't redeclare with let you get a syntax error
13) even with
    var a = 100 ;
    let a = 1000;
    clg(this.a) // again error a is already decalred
14) const b;
    b = 100; syntax error const needs intialisation
