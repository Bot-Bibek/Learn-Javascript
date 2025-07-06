// function init() {
//   var firstName = "ABC";
//   //   console.log("Iam Init Function");
//   function sayFirstName() {
//     console.log(firstName);
//   }
//   return sayFirstName;
// }

// var value = init();

// value();

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(5);
console.log(add5(6));


