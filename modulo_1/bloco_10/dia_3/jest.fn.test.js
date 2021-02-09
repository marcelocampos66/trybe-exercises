function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

test("#randomRgbColor", () => {
  // testando se a função foi chamada e qual seu retorno
  randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

  randomRgbColor();
  expect(randomRgbColor).toHaveBeenCalled();
  expect(randomRgbColor()).toBe("rgb(255, 255, 255)");
});


// O mockReturnValue define um valor padrão de retorno. Já o mockReturnValueOnce retorna o valor definido apenas uma vez, e é importante, pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes.

// 
// test("#randomRgbColor", () => {
//   // testando quantas vezes a função foi chamada e qual seu retorno
//   service.randomRgbColor = jest
//     .fn()
//     .mockReturnValue('default value')
//     .mockReturnValueOnce('first call')
//     .mockReturnValueOnce('second call');

//   expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

//   expect(service.randomRgbColor()).toBe("first call");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

//   expect(service.randomRgbColor()).toBe("second call");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

//   expect(service.randomRgbColor()).toBe("default value");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
// });

// É possível implementar vários comportamentos em uma simulação. No exemplo acima, note que a implementação mockReturnValueOnce se sobrepõe em relação a mockReturnValue , que se torna um padrão apenas após os retornos de mockReturnValueOnce serem executados.