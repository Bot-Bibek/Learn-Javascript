//Allow user to access course if he is :
//logged in from email
//logged in from Google
//logged in from Facebook
 

var email = true;
var facebook = false;
var google = false;

// if (email) {
//     console.log("Login Success")
// }

//Or senario
if (email || facebook || google) {
    console.log("Login Success!!")
}