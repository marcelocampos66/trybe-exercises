const {
  findByCEP,
  createNewCep,
  getCepByAPI,
} = require('../models/ceplookupModel');

const returnCEP = async (cep) => {
  const validCEP = cep.split('-').join('')
  const result = await findByCEP(validCEP);
  if (!result) {
    const erroJson = { "error": { "code": "notFound", "message": "CEP não encontrado" } };
    return { code: 404, response: erroJson };
  }
  return { code: 200, response: result };
};

const registerCEP = async (cepInfos) => {
  const infos = cepInfos;
  const { cep } = infos;
  infos.cep = cep.replace('-', '');
  const cepExists = await findByCEP(infos.cep);
  if (cepExists) {
    const erroJson = {"error": { "code": "alreadyExists", "message": "CEP já existente" }};
    return { code: 409, response: erroJson };
  }
  const createdNewCep = await createNewCep(infos);
  return { code: 201, response: createdNewCep }
};

const findAndRegisterCepByApi = async (cepToFetch) => {
  const fetchedCEP = await getCepByAPI(cepToFetch);
  if (fetchedCEP.erro){
    const erroJson = { "error": { "code": "notFound", "message": "CEP não encontrado" } };
    return { code: 404, response: erroJson };
  }
  const { cep, logradouro, bairro, localidade, uf } = fetchedCEP;
  const newCepToRegister = { cep, logradouro, bairro, localidade, uf };
  const newRegisteredCep = await registerCEP(newCepToRegister);
  return newRegisteredCep;
};

module.exports = {
  returnCEP,
  registerCEP,
  findAndRegisterCepByApi,
};
