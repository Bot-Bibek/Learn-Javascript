//Arrow Function
var isEven = (element) => {
    //   if (element % 2 === 0) {
    //     return true;
    //   }
    // //   return false;
  
    //when the return keyword is remove it log the undefine
    //it is require to have return keyword beacuse its arrow function
    return element % 2 === 0;
};
  
  console.log(isEven(3));
  
  // var result = [2, 3, 6, 8].every(isEven);
  // console.log(result);
  
//   var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
//   console.log(result);