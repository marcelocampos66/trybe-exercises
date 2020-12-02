let numbers = [2, 3, 2, 5, 8, 2, 3];

let comparador = 0;
let contador = 0;
let numeroDeRepeticoes = 0;
let numeroQueMaisSeRepete = 0;

function mostRepeated(numbers) {
    for (let index = 0; index < numbers.length; index += 1) {
        comparador = numbers[index];
        contador = 0;
      for (let index2 = 0; index2 < numbers.length; index2 +=1) {
        if (numbers[index2] === comparador) {
          contador +=1 ;
        }
      }
      if (numeroDeRepeticoes < contador) {
        numeroDeRepeticoes = contador;
        numeroQueMaisSeRepete = numbers[index];
      }
    }
    return (numeroQueMaisSeRepete);
  }
  console.log(mostRepeated(numbers));
