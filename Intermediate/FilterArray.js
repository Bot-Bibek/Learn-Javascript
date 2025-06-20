var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

//Fill method Changes all array elements from start to
// end index to a static value and returns the modified array

//First variable is always what you want to fill it up and
//Second argument is what should be my start position
//in most of the programming the start range is inclusive and the end range is exclusive  
// console.log(testArray.fill("empty", 2, 5));

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];
//Whenever we use array it gives new array
const newNumber = myNumber.filter((num) => num != 55);

// console.log(myNumber)
// console.log(newNumber);

// Yes, Same exercise file

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1));
users.splice(1, 3, "HI", "BYE");
users.splice()
console.log(users);