const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const crescentOrders = (array) => {
  const crescentArray = array.sort((a, b) => a - b);
  return crescentArray;
}

console.log(`Os números ${crescentOrders(oddsAndEvens)} se encontram ordenados de forma crescente!`);
