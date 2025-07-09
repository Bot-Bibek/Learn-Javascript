// var returnValue = Math.max(2, 5, 7, 4, 2, 9, 8);

// console.log(returnValue);

// var myObj = {};

// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { x: 10, y: 11, z: 12 });
// console.log(myObj);

/**
 * When function aspect individual value but our values comes
 * in pack or a bunch (Array, Object) in that case if we don't want to
 * change the function  defination all we can do is we can use spread operator
 */
function sumOne(a, b) {
  return a + b;
}

var myA = [5, 4];
console.log(sumOne(...myA)); //Spread Operator

//if we don't know how many args will come in function we use ...args
//Rest Operator
function sumTwo(a, b, ...args) {
  console.log(args);

  let multi = a * b;

  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }

  return [sum, multi];
}

console.log(sumTwo(2, 3, 4, 5, 6, 7));
