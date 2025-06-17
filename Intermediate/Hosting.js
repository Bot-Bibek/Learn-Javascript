
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


function tipper(a) {
    var bill = parseInt(a); //convert string into number
    console.log(bill + 5);
    
}
tipper("80")
//if i call this function before the function it will run because of global function


// bigTipper("200") // this will show error
//the reason is Variable declrations are scanned and made undefiened
//So the bigTipper variable is undefined global context does not know about it
//They are function but they are treated as ordinary variable (Hosting)
// this syntax should always come first and the call should be before the syntax

var bigTipper = function(a) {
    var bill = parseInt(a)
    console.log(bill + 15);
}
bigTipper("200") 
//but if you are declearing pure function not this variable declear function
// the call of function works when you put the call before the function


//Code hosting said what if i try to print first and then try to declear it
// According to the global context, it know the name is define you just trying to
// access it first
console.log(name) //show undefiend
var name = "ABC";



function sayName() {
    var name = "XYZ";
    console.log(name)
}
sayName();

console.log(name)