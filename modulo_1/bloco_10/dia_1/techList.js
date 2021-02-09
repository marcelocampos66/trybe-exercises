// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

// {
//   tech: 'nomeTecnologia',
//   name: name,
// }

function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  const list = [];
  const ordenedArray = array.sort();
  ordenedArray.forEach((technology) => {
    list.push({
      tech: technology,
      name,
    });
  });
  return list;
}

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Marcelo'));

module.exports = techList;