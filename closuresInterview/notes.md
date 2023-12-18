1. let is block scope so it creates new copy and var is global scope

2)  In JavaScript, functions are considered first-class objects, which means they can be treated like any other object, including being passed as arguments to other functions, returned from functions, and assigned to variables. Since functions are objects, they are allocated memory on the heap.

Closures, as you mentioned, are a feature of functions in JavaScript where a function can retain access to variables from its containing lexical scope even after that scope has finished executing. This can lead to situations where variables referenced by closures are held in memory longer than expected.

Garbage collection in JavaScript is responsible for reclaiming memory that is no longer needed or referenced by the program. The garbage collector needs to be aware of the relationships between objects, including functions and their closures, to determine which objects can be safely reclaimed.

Understanding these concepts is crucial for writing efficient and memory-safe JavaScript code. Keep exploring and experimenting with these ideas to deepen your understanding of how memory management works in the context of JavaScript and other programming languages.
