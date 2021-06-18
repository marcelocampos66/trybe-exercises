const perguntas = require('readline-sync');

const sorteio = () => {
  const randomNumber = Math.ceil(Math.random() * 10);
  const inputNumber = perguntas.questionInt('Digite um numero de 1 a 10');

  if (inputNumber === randomNumber) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }

  const tryAgain = perguntas.question('Deseja jogar novamente? (s/n)');

  if (tryAgain === 's') {
    sorteio();
  } else if (tryAgain === 'n') {
    console.log('Tchau!');
  } else {
    console.log('Resposta Incorreta');
  }
};

sorteio();

module.exports = sorteio;
