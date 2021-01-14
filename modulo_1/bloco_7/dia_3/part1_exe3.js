const assert = require('assert');
let array = [1,2,3,4,5,6,7,8,9,10];
// let myItem = 5;

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// console.log(myRemoveWithoutCopy(array,myItem));

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 3, 4]);
assert.deepStrictEqual(array,[1,2,3,4,5,6,7,8,9,10]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);