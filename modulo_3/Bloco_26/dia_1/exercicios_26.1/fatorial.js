const perguntas = require('readline-sync');

const number = perguntas.questionInt('Digite um numero para o fatorial ');

const fatorial = (n) => (n === 1 || n === 0) ? n : n * fatorial(n - 1);

console.log(fatorial(number));

module.exports = fatorial;
