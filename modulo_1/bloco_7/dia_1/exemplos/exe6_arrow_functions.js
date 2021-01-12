// Mas lembre-se que podemos omitir os parênteses apenas em dois cenários:
// 1- Quando não passamos nenhum parâmetro para a função, como no exemplo acima;
// 2- Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));
