function exercicio1(num1, num2, num3) {
  return new Promise(
    (resolve, reject) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error('Informe apenas números'));

      const result = (num1 + num2) * num3;

      if (result < 5000) reject(new Error('Valor muito baixo'));

      resolve(result);
    }
  );
}

async function exercicio3() {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  try {
    const result = await exercicio1(a, b, c);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

exercicio3();
