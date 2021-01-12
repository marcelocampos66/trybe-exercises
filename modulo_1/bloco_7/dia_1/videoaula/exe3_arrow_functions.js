/*
modo normal
function objetoPessoa (nome, idade) {
  return {
    nome: nome,
    idade: idade,
  }
}

console.log(objetoPessoa('Joaquim', 25));
*/

const objetoPessoa = (nome, idade) => ({nome:nome, idade:idade});

console.log(objetoPessoa('Joaquim', 25));
