const array = ['HTML', 'CSS', 'JavaScript', 'Econometria', 'Matemagica Financeira'];

const funcao1 = (string) => {
  let stringRetornada = 'Tryber x aqui!'
  stringRetornada = stringRetornada.replace('x', string);

  return stringRetornada;
}

// console.log(funcao1('Marcelo'))

//
let resultados = '';
array.forEach(function (nome, index) {
  resultados += `-${nome} \n`;
  // console.log(resultados);
})

//

const funcao2 = (stringRetornada) => {

  return `${stringRetornada} Minhas cinco principais habilidades são:

${resultados}

  #goTrybe!`
}

console.log(funcao2(funcao1('Marcelo')));
