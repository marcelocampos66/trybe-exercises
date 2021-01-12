const maiorPalavra = (frase) => {
  let arrayFrase = frase.split(' ').sort((a, b) => b.length - a.length);
  return arrayFrase[0];
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));
