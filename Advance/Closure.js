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

//Reference of  do Addition function
// var add5 = doAddition(5);
// console.log(add5(6));

console.log(doAddition(5)(5)); //Curring
