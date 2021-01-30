// As promises se comportam de forma muito parecida com as funções que já conhecemos, mas existem 3 pontos de destaque das Promises em relação à outras funções:

// 1-As Promises são assíncronas , ou seja, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções.
// 2-As Promises têm "superpoderes", isto é, funções extras que facilitam o controle do fluxo assíncrono.
// 3-As Promises são construídas de um forma distinta: para criar uma nova Promise, usamos um Construtor .

// vamos passo-a-passo construindo uma Promise para que você entenda cada tijolinho que forma nossa superfunção.

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));