/*
Define a function that can answer the role of a user
A user can be on following roles;
admin - with all access
subadmin - with access to create/deletec coures
testprep - with access to create/ delete test
user consume all content 
other trail users

input getUserRole(name, role)
*/
//in javascript the function can be written inside variable also

var getUserRole = function(name, role) {
    
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; //Not necessary
        case "subadmin":
            return `${name} is subadmin with access to create and delete cousres`
            break
        case "testprep":
            return `${name} is testprep with access to create and delete test`
            break
        case "user":
            return `${name} is user with access to consume all content`
            break
        default:
            return `${name} is a trail users`
            break;
        
    }
}

var getRole = getUserRole("ABC", "user")
console.log(getRole)