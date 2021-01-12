const array = ['HTML', 'CSS', 'JavaScript', 'Econometria', 'Matemagica Financeira'];

const funcao1 = (string) => {
  let stringRetornada = 'Tryber x aqui!'
  stringRetornada = stringRetornada.replace('x', string);

  return stringRetornada;
}

// console.log(funcao1('Marcelo'))

//
// for (let index = 0; index < array.length; index +=1) {}

array.forEach(function(nome, index) {
  let result = (nome, index);
})

//

const funcao2 = (stringRetornada) => {


  return `${stringRetornada} Minhas cinco principais habilidades são:
  -${array[0]}
  -${array[1]}
  -${array[2]}
  -${array[3]}
  -${array[4]}

  #goTrybe!`
}

console.log(funcao2(funcao1('Marcelo')));
