const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const counterA = names.reduce((acc, name) => acc + name,)
  .split('').reduce((acc, letter) => (letter.toLowerCase() === 'a') ? acc + 1 : acc, 0);
  return counterA;
}
console.log(containsA());

assert.deepStrictEqual(containsA(), 20);