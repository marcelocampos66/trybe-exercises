const connection = require('./connection');
const axios = require('axios');

const findByCEP = async (cep) => {
  const query = 'SELECT * FROM exercises.ceps WHERE cep=?';
  const infos = await connection.execute(
    query,
    [cep],
  ).then(([result]) => result[0]);
  return infos
};

const createNewCep = async (newCep) => {
  const { cep, logradouro, bairro, localidade, uf } = newCep;
  const query = 'INSERT INTO exercises.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)';
  await connection.execute(
    query,
    [cep, logradouro, bairro, localidade, uf],
  );
  return { cep, logradouro, bairro, localidade, uf }
}

const getCepByAPI = async (cep) => {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`
  const getInfo = await axios.get(endpoint);
  if (getInfo.status !== 200) return null;
  const { data } = getInfo;
  return data;
};

module.exports = {
  findByCEP,
  createNewCep,
  getCepByAPI,
};
