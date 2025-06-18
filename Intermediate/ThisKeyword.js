//TODO: part 1 for this keyword

console.log(this); //in Simple way (Global Context) this keyword give access to the global context defers in the situation
//In the case of node it gives me a empty scope
//In the case of browser it gives me the access to the windows objects


var game = "basketball";

//This keyword using function is not a great way  
function sayName() {
  var name = "ABC";
  console.log(this); //this will console log the Global object
}

sayName();