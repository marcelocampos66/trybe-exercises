const assert = require('assert')

function sum(...rest) {
  result = rest.reduce((acc, currentValue) => acc + currentValue, 0);
  return result;
}

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)