// EXEMPLO 4
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaOsPares = (acc, number) => (number % 2 === 0) ? acc + number : acc;

const totalSomaPares = numbers.reduce(somaOsPares, 0);

console.log(totalSomaPares);