/**
 * Nearly all objects in javascript are instance of
 * object a typical object inherits properties (Includeing Methods)
 * form object.prototype
 */

var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is ${this.name}`);
  },
};

var yogesh = Object.create(User);
console.log(yogesh);
yogesh.name = "Yogesh Bahadur Dhakal";
yogesh.getUserName();

var umesh = Object.create(User, {
  name: { value: "Dhakal Bro" },
  courseCount: { value: 20 },
});

umesh.getUserName();
