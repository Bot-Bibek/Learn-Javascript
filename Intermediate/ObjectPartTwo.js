var user = {
    firstName: "ABC",
    lastName: "XYZ",
    role: "Admin",
    loginCount: 21,
    facebookSignedIn: true,
    courseList: [],
    //Defining Method inside Object
    buyCourse: function (courseName) {
        //if we want to refer a variable inside the same object then we use THIS Keyword
      this.courseList.push(courseName);
    },

    // Method to get total number of courses
    getCourseCount: function () {
      return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

//Method to Display Info
    getInfo: function () {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.role);
        console.log(this.loginCount);
        console.log(this.facebookSignedIn ? "Yes" : "No");
        console.log(`Number of Course Enrolled ${this.courseList.length}`);
    }
};
  
  
  var courseList = true;
//   console.log(user.firstName);
  console.log(user.getCourseCount());
  user.buyCourse("React JS course");
  user.buyCourse("Angular course");
  user.buyCourse("MERN STACK Course");
  user.buyCourse("Node JS Course")
console.log(user.getCourseCount());
console.table(user.getInfo())
  


//Create a method named INFO what info is ganna do info ganna dump down all of the information 
// of var user from firstname to courseList it's ganna tell me how much of the courselist (kinda produce table for me) how many number of course are their