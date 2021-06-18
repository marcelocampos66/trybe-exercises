const perguntas = require('readline-sync');

const calcVelocity = () => {
  const distancia = perguntas.questionInt('Distancia em metros?');
  const tempo = perguntas.questionInt('Tempo em segundos?');

  const result = (distancia / tempo).toFixed(2);

  console.log(`Sua velocidade eh de: ${result} m/s`);
};

calcVelocity();

module.exports = calcVelocity;
