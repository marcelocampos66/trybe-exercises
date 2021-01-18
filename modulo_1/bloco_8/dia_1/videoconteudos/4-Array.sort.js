// EXEMPLO 1
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// EXEMPLO 2 crescente
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); //crescente
console.log(points); // [1, 5, 10, 25, 40, 100]

// EXEMPLO 3 decrescente
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort((a, b) => b - a);
console.log(points2); // [ 100, 40, 25, 10, 5, 1 ]

