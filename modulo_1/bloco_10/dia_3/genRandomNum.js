function randomNumber() {
  const result = Math.round(Math.random() * 100);
  return result;
}

// console.log(randomNumber());

module.exports = randomNumber;