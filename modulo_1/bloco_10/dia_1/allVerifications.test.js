const sum = require('./sum');
const { encode, decode } = require('./encode-decode');
const techList = require('./techList.js');
const hydrate = require('./hydrate.js');
const searchEmployee = require('./searchEmployee');

describe('Testes relacionados a funcao sum', () => {
  test('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Teste se a função sum lança um erro quando os parametros são 4 e "5"', () => {
    expect(() => { sum(4, '5') }).toThrow();
  })

  test('Teste se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => { sum(4, '5') }).toThrow(/parameters must be numbers/);
  })

});

describe('Testes relacionados as funcoes encode e decode', () => {

  test('Teste se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toBe('function');
  });

  test('encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bcdfg')).toBe('bcdfg');
  });

  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('67890')).toBe('67890');
  });

  test('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('bcdfg').length).toEqual('bcdfg'.length); 
  });

  test('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('67890').length).toEqual('67890'.length); 
  });

});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('Testa a funcao searchEmployee', () => {
  const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];

  test('teste para checar se a função existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('Testa se a funcao faz a busca pelo id e retorna o empregado', () => {
    expect(searchEmployee('8579-6', 'lastName')).toEqual('Gates');
  });

  test('Testa se a funcao retorna um array de habilidades ao pedir a informacao specialities', () => {
    expect(searchEmployee('1256-4', 'specialities')).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });

  test('Testa se a funcao retorna erro ao chamar com uma id inexistente', () => {
    expect(() => { searchEmployee('xablau', 'specialities') }).toThrow();
  });

  test('Testa a msg retornada como erro ao chamar com uma id inexistente', () => {
    expect(() => { searchEmployee('xablau', 'lastName') }).toThrow(/ID não identificada/);
  });

  test('Testa se a funcao retorna erro ao chamar uma info inexistente', () => {
    expect(() => { searchEmployee('4678-2', 'xablau') }).toThrowError(new Error('Informação indisponível'));
  })

});
