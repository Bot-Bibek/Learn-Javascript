const uid = "123"; //unique id constant value can't be change is unmutable

//forms 
var fullName = "ABC";
var email = "ABC@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

//take input from users
// prompt("Enter your name");

console.log(uid);
console.log(fullName);
console.log(email);

//Much more presice much more readable
//it provide much more flexibility for injecting variables
//in the world of javascript it's called interpolation
//better way to display things 
console.log(`
    With Uniqe ID: ${uid}
    User is : ${fullName}
    and his email is: ${email}
    and uses the password: ${password}
    `);