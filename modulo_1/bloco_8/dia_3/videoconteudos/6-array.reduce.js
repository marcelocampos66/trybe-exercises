players = [
  {fullName: 'Adriano Imperador', email: 'didico@futebol.br'},
  {fullName: 'Ronaldinho Gaucho', email: 'bruxo@futebol.br'},
  {fullName: 'Ronaldo Fenomeno', email: 'cortedocascao@futebol.br'},
  {fullName: 'Tulio Maravilha', email: 'deputado@futebol.br'},
];

const objectPlayer = players.reduce((previousValue, currentValue) => {
  previousValue[currentValue.fullName] = currentValue.email;
  return previousValue;
}, {});

console.log(objectPlayer);