const tripleFunctions = require('./tripleFunctions');

test('Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar', () => {
  const one = jest.spyOn(tripleFunctions, 'numberOne')
  .mockImplementation((string) => string.toLowerCase());


  expect(one('XABLAU')).toBe('xablau');
  expect(one).toHaveBeenCalled();
  expect(one).toHaveBeenCalledTimes(1);
  expect(one).toHaveBeenCalledWith('XABLAU');

  
  tripleFunctions.numberOne.mockRestore();
  
  expect(tripleFunctions.numberOne('xablau')).toBe('XABLAU');
});