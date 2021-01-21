// EXEMPLO 1
const person = {
  name: "João",
  lastName: "Jr",
  age: 34
};

const { nationality = "Brazilian" } = person;
console.log(nationality); // Brazilian

// EXEMPLO 2
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(z); // 0
