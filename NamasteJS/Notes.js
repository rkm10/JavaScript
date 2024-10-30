/*

1. In JS, before the code is executed, the variables get initialized to undefined.
2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.
3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a      
   function before initializing it.
4. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.
5. Variable declarations are scanned and are made undefined.
6. Function declarations are scanned and are made available.

7. anything that is not inside an function is global space
8. undefined means it is yet be assigned a value. as there is no value , JS replaces it with undefined as placeholder.
9. Scope of a variable is directly dependent on the lexical environment.
10. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
11. js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
12. let and const declarations are hoisted. we cant use them before initialization is result of "temporal dead zone".
13.  level of strictness ... var<<let<<const.
14. var //no temporal dead zone, can redeclare and re-initialize, stored in GES.
    let //use TDZ, can't re-declare, can re-initialize, stored in separate memory.
    const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory.
15. syntax error ... violation of JS syntax.
    type error ...  while trying to re-initialize const variable.
    reference error ... while trying to access variable which is not there in global memory.
16. window.variable OR this.variable will not give value of variable defined using let or const.
17. const used for static or not changed later.
18. always add or put declarations the initializations on the top to aviod any temporal dead zone
19. let and const are block scoped.
    var is a gobal scope.
20. lexical scope is nothing but a scope inside a scope.
21. When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment' 
22. Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure.

*/