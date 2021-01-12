/*const printName = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());*/

// Quando não há nada no corpo da função e apenas um valor é retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:

const printName = () => "Lucas";
console.log(printName());
