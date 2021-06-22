const { expect } = require('chai');

const pnnfunction = require('./index');

describe('recebe um número como parâmetro e retorna uma string', () => {

  describe('número passado for maior que 0', () => {
    const resposta = pnnfunction(5);
    it('retorna uma resposta', () => {
      expect(resposta).not.to.be.empty;
    });
    it('resposta eh uma string', () => {
      expect(resposta).to.be.a('string');
    });
    it('retorna positivo', () => {
      expect(resposta).to.be.equals('positivo');
    });
  });

  describe('número passado for menor que 0', () => {
    const resposta = pnnfunction(-3);
    it('retorna uma resposta', () => {
      expect(resposta).not.to.be.empty;
    });
    it('resposta eh uma string', () => {
      expect(resposta).to.be.a('string');
    });
    it('retorna negativo', () => {
      expect(resposta).to.be.equals('negativo');
    });
  });

  describe('número passado for igual a 0', () => {
    const resposta = pnnfunction(0);
    it('retorna uma resposta', () => {
      expect(resposta).not.to.be.empty;
    });
    it('resposta eh uma string', () => {
      expect(resposta).to.be.a('string');
    });
    it('retorna negativo', () => {
      expect(resposta).to.be.equals('neutro');
    });
  });

  describe('parametro passado nao eh um tipo Number', () => {
    const resposta = pnnfunction('xablau');
    it('retorna uma resposta', () => {
      expect(resposta).not.to.be.empty;
    });
    it('resposta eh uma string', () => {
      expect(resposta).to.be.a('string');
    });
    it('retorna o valor deve ser um número', () => {
      expect(resposta).to.be.equals('o valor deve ser um número');
    });
  });

});
