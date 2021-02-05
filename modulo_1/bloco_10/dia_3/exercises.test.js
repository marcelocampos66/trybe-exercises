const randomNumber = require('./genRandomNum');
const tripleFunctions = require('./tripleFunctions');
jest.mock('./genRandomNum');
jest.mock('./tripleFunctions');

describe('Exercicio 1', () => {
  
  test('Testas para a funcao random number', () => {
    randomNumberMock = jest.fn(randomNumber).mockReturnValue(10);
    
    randomNumberMock();
    expect(randomNumberMock).toHaveBeenCalled();
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
    expect(randomNumberMock()).toBe(10);
    expect(randomNumberMock).toHaveBeenCalledTimes(2);
  });

});

describe('Exercicio 2', () => {

  test('crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
    randomNumber.mockReset();
    randomNumber.mockImplementation((a, b) => a / b);

    expect(randomNumber(50, 2)).toStrictEqual(25);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(50, 2);
  });

});

describe('Exercicio 3', () => {

  test('crie uma nova implementação que receba três parâmetros e retorne sua multiplicação', () => {
    randomNumber.mockReset();
    randomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(2, 2, 3)).toStrictEqual(12);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 2, 3);
  });

  test('recebe um parâmetro e retorne seu dobro', () => {
    randomNumber.mockReset();
    randomNumber.mockImplementation((number) => number * number);

    expect(randomNumber(4)).toStrictEqual(16);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(4);
  });

});

describe('Exercicio 4', () => {

  test('Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa', () => {
    tripleFunctions.numberOne.mockImplementation((string) => string.toLowerCase());
    
    expect(tripleFunctions.numberOne('XABLAU')).toStrictEqual('xablau');
    expect(tripleFunctions.numberOne).toHaveBeenCalled();
    expect(tripleFunctions.numberOne).toHaveBeenCalledTimes(1);
    expect(tripleFunctions.numberOne).toHaveBeenCalledWith('XABLAU');
  });

  test('Faça uma nova implementação deve retornar a última letra de uma string', () => {
    tripleFunctions.numberTwo.mockImplementation((string) => string[string.length -1]);
    
    expect(tripleFunctions.numberTwo('xablau')).toStrictEqual('u');
    expect(tripleFunctions.numberTwo).toHaveBeenCalled();
    expect(tripleFunctions.numberTwo).toHaveBeenCalledTimes(1);
    expect(tripleFunctions.numberTwo).toHaveBeenCalledWith('xablau');
  });

  test('A terceira deve receber três strings e concatená-las', () => {
    tripleFunctions.numberThree.mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

    expect(tripleFunctions.numberThree('I', 'Love', 'Trybe')).toStrictEqual('ILoveTrybe');
    expect(tripleFunctions.numberThree).toHaveBeenCalled();
    expect(tripleFunctions.numberThree).toHaveBeenCalledTimes(1);
    expect(tripleFunctions.numberThree).toHaveBeenCalledWith('I', 'Love', 'Trybe');
  });

});

describe('Exercicio 5', () => {

  test('Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar', () => {
    const one = jest.fn(tripleFunctions.numberOne);

    one.mockImplementation((string) => string.toLowerCase());

    expect(one('XABLAU')).toBe('xablau');
    expect(one).toHaveBeenCalled();
    expect(one).toHaveBeenCalledTimes(1);
    expect(one).toHaveBeenCalledWith('XABLAU');

    // tripleFunctions.numberOne.mockRestore();

    // expect(tripleFunctions.numberOne('xablau')).toBe('XABLAU');
    // expect(one).toHaveBeenCalled();
    // expect(one).toHaveBeenCalledTimes(3);
    // expect(one).toHaveBeenCalledWith('xablau');
  });

});
