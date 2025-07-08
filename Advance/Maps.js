var myMaps = new Map();

//Maps work just like maps but map is not a object
myMaps.set(0, "UNO");
myMaps.set(1, "DOS");
myMaps.set(2, "UNO");
myMaps.set(3, "TRES");
myMaps.set(4, "CUATRO");

console.log(myMaps);

// for (let key of myMaps.keys()) {
//   console.log(`Key is ${key}`);
// }

// for (let value of myMaps.values()) {
//   console.log(`Value is ${value}`);
// }

//When we use for of loop its a classic way of ittrating through the things
/**
 * In mordern version of ForEach in those values loops is design in such a way
 * it understand that you will be doing somethings with the values rather than indexes
 * and here in the map the keys are consider as indexs that why it does not give the indexes
 */
for (let [key, value] of myMaps) {
  console.log(`Key is ${key} Value is ${value}`);
}

//
myMaps.forEach((v, k) => console.log(`${v} ${k}`));

myMaps.delete(2);
console.log(myMaps);

