const math = require('./math');
jest.mock("./math");

describe('Testes para fixar', () => {
  
  test('Faça o mock da funcão subtrair e teste sua chamada', () => {
    math.subtrair = jest.fn().mockReturnValue(4);

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair(8,4)).toStrictEqual(4);
    expect(math.subtrair).toHaveBeenCalledTimes(2);
  });

  test('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10', () => {
    math.multiplicar = jest.fn()
    .mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar(2,5)).toStrictEqual(10);
  });

  test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma.', () => {

    math.somar.mockImplementation((a, b) => a + b);
    math.somar(2, 2);

    // mockImplementation so funciona gracas a linha de codigo jest.mock("./math");
  
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(2, 2);
    expect(math.somar(2, 2)).toBe(4);
  });

});