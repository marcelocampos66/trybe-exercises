// Exercicio 1

function exercicio1(num1, num2, num3) {
  return new Promise(
    (resolve, reject) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error('Informe apenas números'));

      const result = (num1 + num2) * num3;

      if (result < 50) reject(new Error('Valor muito baixo'));

      resolve(result);
    }
  );
}

// 

// Exercicio 2

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

exercicio1(a, b, c)
  .then((result) => console.log(result))
  .catch((erro) => console.error(erro.message));

//