const perguntas = require('readline-sync');

const calcIMC = () => {
  const peso = perguntas.questionFloat('Qual eh o seu peso?');
  const altura = perguntas.questionInt('Qual eh a sua altura?');
  const alt = altura / 100;
  const result = (peso / Math.pow(alt, 2)).toFixed(2);

  let message;

  if (result < 18.5) {
    message = 'Abaixo do peso (magreza)';
  }
  if (result >= 18.5 && result <= 24.9) {
    message = 'Peso normal';
  }
  if (result >= 25 && result <= 29.9) {
    message = 'Acima do peso (sobrepeso)';
  }
  if (result >= 30 && result <= 34.9) {
    message = 'Obesidade grau I';
  }
  if (result >= 35 && result <= 39.9) {
    message = 'Obesidade grau II';
  }
  if (result > 40) {
    message = 'Obesidade graus III e IV';
  }

  console.log(message);
  console.log(`O seu IMC eh ${result}`);
};

calcIMC();

module.exports = calcIMC;
