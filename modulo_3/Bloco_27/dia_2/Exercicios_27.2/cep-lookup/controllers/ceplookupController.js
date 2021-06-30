const HTTP_STATUS_OK = 200;

const {
  returnCEP,
  registerCEP,
  findAndRegisterCepByApi,
} = require('../services/ceplookupService');

const getPong = (_req, res) => {
  res.status(HTTP_STATUS_OK).json({ message: 'pong!' });
};

const getCEP = async (req, res) => {
  const { params: { cep } } = req;
  const cepData = await returnCEP(cep);
  const { code, response } = cepData;
  return res.status(code).json(response);
};

const registerNewCEP = async (req, res) => {
  const { body } = req;
  const createdCEP = await registerCEP(body);
  const { code, response } = createdCEP;
  res.status(code).json(response);
};

const registerNewCepByAPI = async (req, res) => {
  const { params: { cep } } = req;
  const registeredCep = await findAndRegisterCepByApi(cep);
  const { code, response } = registeredCep;
  res.status(code).json(response);
};

module.exports = {
  getPong,
  getCEP,
  registerNewCEP,
  registerNewCepByAPI,
};
