const perguntas = require('readline-sync');

const menu = () => {
  const scripts = ['IMC', 'Velocidade', 'Sorteio', 'Fatorial', 'Fibonacci'];

  const options = scripts.map((nome, index) => `\n ${index+1}- ${nome}`);

  const question = `Digite o numero do script que deseja rodar:
    ${options} 
  `;

  const response = perguntas.questionInt(question);

  if (response < 1 || response > 5) return console.log('Opcao Invalida.');

  if (response === 1) {
    require('./imc');
    return;
  }
  if (response === 2) {
    require('./velocidade');
    return;
  }
  if (response === 3) {
    require('./sorteio');
    return;
  }
  if (response === 4) {
    require('./fatorial');
    return;
  }
  if (response === 5) {
    require('./fibonacci');
    return;
  }
};

menu();
