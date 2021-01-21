// Os argumentos que serão passados como parâmetro são salvos em um array que pode ser acessado de dentro da função. Por isso, podemos passar qualquer tipo de parâmetro quando usamos o rest . Todos eles serão colocados dentro de um array, o que te permite usar métodos como o .length .

// EXEMPLO 1
function quantosParams(...args) {
  console.log('parâmetros:', args)
  return `Você passou ${args.length} parâmetros para a função.`;
};

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams("string", null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// EXEMPLO 2
const sum = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};
console.log(sum(4, 7, 8, 9, 60)); // 88

// Sua função é muito mais flexível quando queremos passar múltiplos parâmetros com o rest pois você não precisa especificar quantos argumentos a função irá receber!