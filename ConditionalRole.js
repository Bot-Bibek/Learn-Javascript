//Switch Case

//Create an application with following roles:
//Admin - gets full access
//subadmin - get access to create/delete course
//testprep - get access to create/delet tests
// user - get access to consume content

var user = "admin";

//if you don't putout the break statment  then somethings happen which 
// known as fallthrough
switch (user) {
    case "admin":
        console.log("You get Full Access !!");
        break;
    case "subadmin":
        console.log("Get access to create/delete course")
        break;
    case "testprep":
        console.log("Get access to create/delete test")
        break;
    case "user":
        console.log("Get access to consume content")
        break;
    
    default:
        console.log("Trial User");
        break;
    

}