const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const should = require('chai').should();

const writeContent = require('./index');

const nomeDoArquivo = 'xablau.txt';
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget orci mauris.';

describe('escreverá um conteúdo em um arquivo específico', () => {
  const resposta = writeContent(nomeDoArquivo, content);

  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('retorna uma resposta', () => {
    expect(resposta).not.to.be.empty;
  });
  it('resposta eh uma string', () => {
    expect(resposta).to.be.a('string');
  });
  it('retorna ok apos escrever o arquivo', () => {
    expect(resposta).to.be.equals('ok');
  });
  it('conteudo do arquivo escrito eh igual ao content passado p/ funcao', () => {
    const arquivoContent = fs.readFileSync(nomeDoArquivo).toString();
    arquivoContent.should.have.contains(content);
  });

});
