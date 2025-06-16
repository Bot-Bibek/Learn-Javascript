
//for example basic function which say hello

//how you know came to about this function that was decleared and uses was
//at the top 
//so this all is about the global context of js
sayHello();

function sayHello() {
    console.log("Hello")
}

//For example
// if (2 === 2) {
//     console.log("This is true")
// }

var myName = "ABC";
if (myName === myName) {
    //this code run perfectly
    //but if i use the window.myName in condition  it throw the error 
    //Sicne the entire code i had write in here is excuted by node so the global context is not 
    //avaliable here 
    //the global contect defered little bit when you excute the code in node
    //while ypu excute your code in the browser
    console.log("That's true")
}

//but there is always a concept in js engine there needs to be context
// that context is actual reponsible that all of the things register inside that context
// so that once the function is being register that function is wrapped up and put inside the global context
// so wheneve you need that when the code excute it is aware of those function
//that is the reason why function that was decleared and uses was at the top excute without error because of global context
 


