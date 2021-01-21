// EXEMPLO 1
const carros = ['Gol', 'Marea', 'HB20'];
const motos = ['Biz', 'Hornet', 'R1'];

const veiculos = ['Testarossa', ...carros, 'Gallardo', ...motos];

console.log(veiculos);

// EXEMPLO 2
const person = {
  nome: 'Marcelo',
  idade: 29,
  cidade: 'BH',
}

const conhecimentosTrybe = {
  softSkiils: true,
  hardSkiils: true,
  trabalho: true,
}

const personTrybe = {
  ...person,
  ...conhecimentosTrybe,
  esporte: 'Futebol',
}

console.log(personTrybe);

// EXEMPLO 3
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
console.log(numbers); // [ 1, 2, 3 ];

// EXEMPLO 4
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// EXEMPLO 5
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// EXEMPLO 6
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

