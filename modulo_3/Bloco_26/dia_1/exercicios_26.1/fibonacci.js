const perguntas = require('readline-sync');

const number = perguntas.questionInt('Numero de elementos da sequencia fibonacci');

const fibonacci = (n) => {
  const result = [1, 1];
  if (n === 1) {
    console.log([1]);
    return;
  }
  if (n === 2) {
    console.log([1, 1]);
    return;
  }
  for (let i = 2; i <= n; i += 1) {
    let a = result[i - 2];
    let b = result[i - 1];
    let f = a + b;
    result.push(f);
  }
  console.log(result);
};

fibonacci(number);

module.exports = fibonacci;
