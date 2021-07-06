const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MoviesModel = require('../../models/movieModel');

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', async () => {

    const DBServer = await MongoMemoryServer.create();
    let connectionMock;

    before(async () => {
      const URLMock = DBServer.getUri();
      connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();
      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MoviesModel.getAll();
      expect(response).to.be.empty;
    });

  });

  describe('quando existem filmes criados', () => {

    let DBServer;

    const exampleMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }
    
    before(async () => {
      DBServer = await MongoMemoryServer.create();
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      await connectionMock.db('exercises').collection('movies').insertOne(exampleMovie);

    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });

  });
});

describe('Insere um novo filme no BD', () => {
  let DBServer;
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    DBServer = await MongoMemoryServer.create();
    const URLMock = DBServer.getUri();

    const connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    sinon.stub(MongoClient, 'connect')
    .resolves(connectionMock);

  });

  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });

  describe('quando é inserido com sucesso', async () => {


    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

///////////////

describe('Model - Busca filme pelo id', () => {

  const exampleID = '604cb554311d68f491ba5781';

  describe('O filme nao existe', () => {
    
    it('retorna null', async () => {
      const result = await MoviesModel.findById(exampleID);
      expect(result).to.be.equal(null);
    });

  });

  describe('O filme existe', () => {

    const payloadMovie = {
      _id: ObjectId(exampleID),
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    let DBServer
    let connectionMock;
    
    before(async () => {
      
      DBServer = await MongoMemoryServer.create();
      const URLMock = DBServer.getUri();

      connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });

      sinon.stub(MongoClient, 'connect')
      .resolves(connectionMock);

      await connectionMock.db('exercises').collection('movies').insertOne(payloadMovie);
    });

    after(async () => {
      await connectionMock.close();
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um objeto', async () => {
      const result = await MoviesModel.findById(exampleID);
      expect(result).to.be.a('object');
    });

    it('tem as propriedades do filme', async () => {
      const result = await MoviesModel.findById(exampleID);
      expect(result).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });

  });

});
