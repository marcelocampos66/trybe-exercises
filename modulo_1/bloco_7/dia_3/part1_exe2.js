const assert = require('assert');
let array = [1,2,3,4,5,6,7,8,9,10];
// let myItem = 5;

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(myRemove(array, myItem));

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.deepStrictEqual(array,[1,2,3,4,5,6,7,8,9,10]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
