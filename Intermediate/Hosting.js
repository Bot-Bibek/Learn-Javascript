
//There are 2 major context avaliable in js
//Global Context {which is collecting informaction about every thing it's a window object
// window object is tied majorly with the browser   }


// we saw that their is a global execution context that's keeps on coming
// and keeps on stacking on over or another and the execution context not only with the finctions
// they happen with every line of code that you want to execute
// if the execution is just one line they come and go away
 // if the execution is of entire function, entire big execution context  will come, once the execution is complete then it wil go away
var num = 2;

function sayMe() {
    console.log("Say me")
}

sayMe();

//3 major things in execution context
// Variable Object, Scope Chain, This keyword
//2 rules whenever their is execution context
// Function declrations are scanned and made available
//Variable declrations are scanned and made undefiened
