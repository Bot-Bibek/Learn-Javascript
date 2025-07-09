/**
 * For destructing
 * What ever data in the right hand side similar data should be in the lefthand side
 * and then proborble we can do destructuring
 */

// const user = ["ABC", 3, "admin"];

// // var role = user[2];
// // var name = user[0];

// var [name, courseCount, role] = user;
// console.log(role);

const myUser = {
  name: "ABC",
  courseCount: 5,
  role: "Admin",
};

console.log(myUser.courseCount);

//In destructuring the variable name should also match
const { name, courseCount, role } = myUser;
console.log(courseCount);
