function numberOne(string) {
  return string.toUpperCase();
}

function numberTwo(string) {
  return string[0];
}

function numberThree(string1, string2) {
  return string1.concat(string2);
}

// console.log(numberTwo('marcelo'));

module.exports = { numberOne, numberTwo, numberThree };