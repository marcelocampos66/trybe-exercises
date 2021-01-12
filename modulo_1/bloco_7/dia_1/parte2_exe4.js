const array = ['HTML', 'CSS', 'JavaScript', 'Econometria', 'Matemagica Financeira'];

const funcao1 = (string) => {
  let stringRetornada = 'Tryber x aqui!'
  stringRetornada = stringRetornada.replace('x', string);

  return stringRetornada;
}

// console.log(funcao1('Marcelo'))

const funcao2 = (stringRetornada) => {

  // for (let i = 0; i < array.length; i +=1) {}

  return `${stringRetornada} Minhas cinco principais habilidades são:
  -${array[0]}
  -${array[1]}
  -${array[2]}
  -${array[3]}
  -${array[4]}

  #goTrybe!`
}

console.log(funcao2(funcao1('Marcelo')));
