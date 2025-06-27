console.log(this);
//For regular function calls, this points to window object

var user = {
  firstName: "ABC",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 7", this);

    //Regular function
    function sayHello() {
      console.log("Hello");
      //this gonna give the windows object as it is inside the regular function
      console.log("LINE 10", this);
    }
    //Regular Function Count
    sayHello();
  },
};

user.getCourseCount();
