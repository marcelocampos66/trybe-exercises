// Utilizado para acessar os valores de um objeto, mais simples e com menos declarações.
// EXEMPLO 1
const product1 = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas'
};

//
// const { name } = product1;
// console.log(name); // Smart TV Crystal UHD
// //
// const { name, seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas
//

// EXEMPLO 2
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a:firstName, b:classAssigned, c:subject } = student;

console.log(firstName); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// EXEMPLO 3
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas'
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`)
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas