const joi = require('joi');

const verifyCEP = (req, res, next) => {
  const { params: { cep } } = req;
  const cepRegex = /\d{5}-\d{3}/;
  const isValid = cepRegex.test(cep);
  const erroJson = { "error": { "code": "invalidData", "message": "CEP inválido" } };
  if (!isValid) {
    return res.status(400).json(erroJson);
  }
  next();
};

const verifyRegisterCEPCamps = (req, res, next) => {
  const { body } = req;
  const { error } = joi.object({
    cep: joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: joi.string().not().empty().required(),
    bairro: joi.string().not().empty().required(),
    localidade: joi.string().not().empty().required(),
    uf: joi.string().not().empty().required().length(2),
  }).validate(body);
  if (error) {
    const erroJson = { "error": { "code": "invalidData", "message": error } };
    res.status(400).json(erroJson);
  };
  next();
};

module.exports = {
  verifyCEP,
  verifyRegisterCEPCamps,
};
