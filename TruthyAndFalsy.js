// undrfined
// null
// 0
// "0"
// NaN
//all this are falsy values
// Falsy values are something which are treated as false
// so proving the point again any value which is litrary  define as undefined, null, 0 , "", NaN
// are considered as falsy values
//for example 
var user; //you define variable and forget to out value then its undefined;

var value = ""; //replace 
if (value) {
    console.log("Condition is true");
}

console.log(2 + 2); // this print 4 value 
console.log(2 + "2"); // this print 22 becaues js don't know how to add string and number
//so it assume that no you know what other number might not be the number it might be a string so that's why it print 22
//Now surely there are a ways to avoid these things

//Example
// in this senario i define the roll 2 as a string but
// in if condition i check the number with string and it return
// condition true value
// this is excatly coercion
// JS assuming since you are using 2 = sign you just want to say 2 weather that is string 2 or number 2
// it just want to say loosly 2 that's why it run the code
// but if want very strict check and you want to check even the  type the datatype
// you use 3 = if you use 3 = the code will not run 

var roll = "2";

if (2 == roll) { // replace it with ===
    console.log("Condition true")
}

