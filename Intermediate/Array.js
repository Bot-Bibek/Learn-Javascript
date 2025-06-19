//3 major things any give language
//Array, Object, Loops
//Spend time in reading docs or at least
//Practice with these videos
//Recommend MDN

//Instead of having the multiple variables rather then we can have array
//so we can store all of the information in one variable and can access them
//array always start form 0


//for exmaple
//Old way
var countries = ["Nepal", "USA", "Japan", "Russia"];


//Object Oriantated approach because of new (Friendly approach)
var states = new Array("Pokhara", "Kathmandu", "Dharan", "Chitwan");


//Accessing the arrays 
// console.log(states[1]);

//gives yoy the length of arrays
// console.log(states.length);

//Replacing the value of arrays
states[0] = "Ilam";
// console.log(states);



var user = ["ABC", "ABC@lco.dev", 3, 34, true];
console.log(user);

//remove the value form the very end of the array
user.pop();
user.pop();
// console.log(user);

//adding the value at the very first of the array
user.unshift("NEW VALUE");
// console.log(user);

//remove the the value from the very first of the array.
user.shift();
// console.log(user);


//return the position of values
console.log(user.indexOf("newyy"));

//convert the string into array
console.log(Array.from("ABC"));