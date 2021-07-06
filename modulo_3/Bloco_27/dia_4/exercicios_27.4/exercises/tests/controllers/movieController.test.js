const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de getAll', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'getAll')
        .resolves([]);
    })

    after(() => {
      MoviesService.getAll.restore();
    })

    it('é chamado o método "status" passando 200', async () => {
      await MoviesController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

  });

  describe('quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'getAll')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    })

    after(() => {
      MoviesService.getAll.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

  });
});

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    })

    after(() => {
      MoviesService.create.restore();
    })

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });

});

//////////////////////////////////

describe('Testa o controller findById', () => {

  const exampleID = '604cb554311d68f491ba5781';

  const payloadMovie = {
    id: exampleID,
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  describe('Nao achou filme', () => {
    const req = {};
    const res = {};

    before(() => {
      req.params = { id: exampleID };

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns();

      sinon.stub(MoviesService, 'findById').resolves(null);
    });

    after(() => {
      MoviesService.findById.restore();
    });

    it('eh retornado o status 404 not found', async () => {
      await MoviesController.findById(req, res);
      expect(res.status.calledWith(404)).to.be.true;
    });

    it('eh retornado a mensagem de filme nao encontrado', async () => {
      await MoviesController.findById(req, res);
      expect(res.send.calledWith('Filme não encontrado.')).to.be.true;
    });

  });

  describe('Achou filme', () => {

    const req = {};
    const res = {};

    before(() => {
      req.params = { id: exampleID };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(MoviesService, 'findById').resolves(payloadMovie);
    });

    after(() => {
      MoviesService.findById.restore();
    });

    it('eh retornado o status 200 OK', async () => {
      await MoviesController.findById(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('eh chamado o metodo json retornando um objeto de filme', async () => {
      const movie = await MoviesService.findById(exampleID);
      await MoviesController.findById(req, res);
      expect(res.json.calledWith(movie)).to.be.true

      // expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

  });

});
