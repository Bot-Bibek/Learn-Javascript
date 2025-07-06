//Binding Property

const abc = {
  firstName: "ABC",
  lastName: "XYZ",
  role: "ADMIN",
  courseCount: 3,
  getInfo: function () {
    console.log(
      `     First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studying ${this.courseCount} course
            `
    );
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// abc.getInfo();
//Bind
//giving reference
//bind always gives you reference back
abc.getInfo.bind(dj)();

//another way is we store it in variable
var djinfo = abc.getInfo.bind(dj);
djinfo();


//so difference between bind and call method is 
/**
 * Bind gives the reference back and we have to call
 * the method 
 * while in other hand call method directly calls it
 * 
 */
abc.getInfo.call(dj);
