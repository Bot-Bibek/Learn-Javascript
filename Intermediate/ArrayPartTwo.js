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
  
//   console.log(isEven(3));


//   var result = [2, 3, 6, 8].every(isEven);
//   console.log(result);


//the of writing call back is the simple function that doesnot have a name
var result = [2, 4, 6, 8].every((e) => (
    e % 2 === 0
  ));
  console.log(result);

  //The .every() method tests whether all elements in an array pass a provided test function.
//It returns true if every element passes the test, otherwise false.
  //every() stops executing as soon as the callback returns false.