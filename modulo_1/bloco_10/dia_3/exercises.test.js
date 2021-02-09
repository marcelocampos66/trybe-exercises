const randomNumber = require('./genRandomNum');
const tripleFunctions = require('./tripleFunctions');
const fetchDog = require('./dogAPI');
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
  const { numberOne, numberTwo, numberThree } = tripleFunctions;

  test('Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa', () => {
    const mockNumberOne = numberOne.mockImplementation((string) => string.toLowerCase());
    
    expect(mockNumberOne('XABLAU')).toStrictEqual('xablau');
    expect(mockNumberOne).toHaveBeenCalled();
    expect(mockNumberOne).toHaveBeenCalledTimes(1);
    expect(mockNumberOne).toHaveBeenCalledWith('XABLAU');
  });

  test('Faça uma nova implementação deve retornar a última letra de uma string', () => {
    const mockNumberTwo = numberTwo.mockImplementation((string) => string[string.length -1]);
    
    expect(mockNumberTwo('xablau')).toStrictEqual('u');
    expect(mockNumberTwo).toHaveBeenCalled();
    expect(mockNumberTwo).toHaveBeenCalledTimes(1);
    expect(mockNumberTwo).toHaveBeenCalledWith('xablau');
  });

  test('A terceira deve receber três strings e concatená-las', () => {
    const mockNumberThree = numberThree.mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

    expect(mockNumberThree('I', 'Love', 'Trybe')).toStrictEqual('ILoveTrybe');
    expect(mockNumberThree).toHaveBeenCalled();
    expect(mockNumberThree).toHaveBeenCalledTimes(1);
    expect(mockNumberThree).toHaveBeenCalledWith('I', 'Love', 'Trybe');
  });

});

describe('Exercicio 5', () => {

  // ARQUIVO SEPARADO... exercise5.test.js

});

describe('Exercicio 6', () => {
  const mockDogAPI = jest.fn(fetchDog);
  afterEach(() => mockDogAPI.mockReset());

  test('testando o sucess da promise', () => {
    mockDogAPI.mockResolvedValue('request sucess');
    return expect(mockDogAPI()).resolves.toStrictEqual('request sucess');
  });

  test('testando o fail da promise', () => {
    mockDogAPI.mockRejectedValue('request failed');
    return expect(mockDogAPI()).rejects.toStrictEqual('request failed')
  });

});