// A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. 

// Exemplo 
// string recebida
// '1 cerveja, 2 shots e 1 catuaba'
// retorno da função
// '4 copos de água'

function hydrate(string) {
  let total = 0;
  const array = string.match(/[0-9]/g).map(Number);
  array.forEach((number) => {
    total += number
  })
  return total === 1 ? `${total} copo de água` : `${total} copos de água`;
}

// console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));

module.exports = hydrate;