var User = function (firstName, courseCount) {
  //functional approach of defining object
  // Whenever their is a constructor involved their is a new keyword involved
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is ${this.courseCount}`);
  };
};

var abc = new User("ABC", 3);
var yogesh = new User("Yogesh Dhakal", 10);
console.log(abc);
abc.getCourseCount();
console.log(yogesh);
yogesh.getCourseCount()

//Explaination
/**
 * So after running this code it will give us 2 seprate instances or 2 copy of user will create 
 *  Talking about new keyword first and foremost it is reponsible for actually using this syntax
 * the new keyword is responsible for invoking the custom constructor
 * and creating a unique instance every single time
 * so the many time we use new keyword a new copy of entire object will be created 
 * 
 * 
 * and whenever their is a regular function this keywords always points towards the window object or global object.
 */
