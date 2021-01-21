// EXEMPLO 1
// função soma todos os valores de um array
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers1 = numbers.reduce((result, number) => result + number);
// O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers1); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113