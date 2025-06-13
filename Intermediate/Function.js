function sayHello( name) {
    console.log("Hello There");
    console.log(`Hello There, ${name}.`)
}

//their is a difference between referencing a function and calling a function
//whenever you wanna a call a function you put parenthesis
//whenever you want to refer a function you call it without the parenthesis
// sayHello("ABC");
// sayHello("DEF");

//Another function

function namaste() {
    return "Hello in Nepal"
}

var greeting = namaste(); //part of functional programming

console.log(greeting);



