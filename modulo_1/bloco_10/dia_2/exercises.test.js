const uppercase = require('./uppercase');
const getUserName = require('./getUserName');
// const getRepos = require('./getRepos');
const getAnimalByName = require('./getAnimalByName');
const getAnimalsByAge = require('./getAnimalsByAge');
const { test } = require('@jest/globals');

describe('Exercicio 1', () => {

  test('verifique a chamada do callback de uma função uppercase', (done) => {
    uppercase('xablau', (string) => {
      expect(string).toBe('XABLAU');
      done();
    });
  });

});

describe('Exercicio 2', () => {

  test('verifica o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toStrictEqual('Mark');
  });

  test('verifica o resultado da função getUserName para o caso em que o usuário NAO é encontrado', () => {
    expect.assertions(1);
    return expect(getUserName(8)).rejects.toStrictEqual({ error: 'User with 8 not found.' });
  });

});

describe('Exercicio 3', () => {

  test('verifica o resultado da função getUserName para o caso em que o usuário é encontrado, usando async/await', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toStrictEqual('Mark');
  });

  test('verifica o resultado da função getUserName para o caso em que o usuário NAO é encontrado, usando async/await', async () => {
    expect.assertions(1);
    await expect(getUserName(8)).rejects.toStrictEqual({ error: 'User with 8 not found.' })
  });

});

// describe('Exercicio 4', () => {
//   const url = 'https://api.github.com/orgs/tryber/repos'

//   test('Verifica se existe o repositorio sd-01-week4-5-project-todo-list', () => {
//     return expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-todo-list');
//   });

//   test('Verifica se existe o repositorio sd-01-week4-5-project-meme-generator', () => {
//     return expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator');
//   });

// });

describe('Exercicio 5', () => {
  beforeEach(() => console.log('1 - beforeEach'));
  afterEach(() => console.log('1 - afterEach'));

  test('', () => console.log('1 - test'));

  describe('Scoped / Nested block', () => {
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));

    test('', () => console.log('2 - test'));
  });

  // 1 - beforeEach
  // 1 - test
  // 1 - afterEach
  // 1 - beforeEach ???
  // 2 - beforeEach
  // 2 - test
  // 2 - afterEach
  // 1 - afterEach ???
});

describe('Exercicio 6.1', () => {
  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimalByName('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimalByName('Bob').catch(error => {
          expect(error).toEqual('Nenhum animal com esse nome!');
        });
      });
    });
  });
});

describe('Exercicio 6.2', () => {
  
  test('Verifica se retorna um array com os objetos encontrados', () => {
    expect.assertions(1);
    return expect(getAnimalsByAge(1)).resolves.toStrictEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
  });

  test('Verifica caso não ache nenhum, se retorna uma mensagem de erro', () => {
    expect.assertions(1);
    return expect(getAnimalsByAge(7)).rejects.toStrictEqual('Nenhum animal com essa idade!');
  });

});
