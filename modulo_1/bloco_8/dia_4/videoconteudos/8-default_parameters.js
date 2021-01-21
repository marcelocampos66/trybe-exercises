// EXEMPLO 1
// Simples assim! Passar um parâmetro como default é um pequeno detalhe que torna o seu código muito mais semântico. Assim, o default será utilizado caso nenhum argumento seja fornecido a função.

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

// EXEMPLO 2
const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));