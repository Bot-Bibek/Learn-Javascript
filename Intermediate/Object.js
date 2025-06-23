
var user = {
    firstName: "ABC",
    age: 21,
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true
};

//to access value form object
//dot method
console.log(user.firstName);
//square bracket method
console.log(user["age"])

//manupulate value
user.loginCount = 44;
console.log(user.loginCount)
//dumping all the things at one place
console.log(user)

console.table(user)


//practice

var iphone = {
    company: "Apple Inc",
    model: "16 Pro Max",
    storage: "1 TB",
    ram: 16,
    camera: "34 MP",
    faceID: true,
    version: 25
}

console.table(iphone)