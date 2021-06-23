const fs = require('fs').promises;
const sinon = require('sinon');
const { expect } = require('chai');
const should = require('chai').should();

const writeContent = require('./index');

const nomeDoArquivo = 'xablau.txt';
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget orci mauris.';

describe('escreverá um conteúdo em um arquivo específico', () => {

  describe('', () => {

    before(() => {
      sinon.stub(fs, 'writeFile');
    });
  
    after(() => {
      fs.writeFile.restore();
    });
  
    it('retorna uma resposta', async () => {
      const resposta = await writeContent(nomeDoArquivo, content);
      expect(resposta).not.to.be.empty;
    });
    it('resposta eh uma string', async () => {
      const resposta = await writeContent(nomeDoArquivo, content);
      expect(resposta).to.be.a('string');
    });
    it('retorna ok apos escrever o arquivo', async () => {
      const resposta = await writeContent(nomeDoArquivo, content);
      expect(resposta).to.be.equals('ok');
    });
    
  });
  
  describe('conteudo do arquivo escrito eh igual ao content passado p/ funcao', () => {

    before(() => {
      sinon.stub(fs, 'readFile').returns(content);
    });
  
    after(() => {
      fs.readFile.restore();
    });

    it('conteudo do arquivo escrito eh igual ao content passado p/ funcao', async () => {
      const arquivoContent = await fs.readFile(nomeDoArquivo).toString('utf-8');
      arquivoContent.should.have.contains(content);
    });

  });

});
