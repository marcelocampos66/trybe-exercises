
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const result = arrays.reduce((acc, array) => acc.concat(array));
  return result;
}
console.log(flatten());

// function flatten() {
//   return arrays.reduce((acc, array) => {
//     array.forEach((item) => acc.push(item));
//     return acc;
//   });
// }

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);