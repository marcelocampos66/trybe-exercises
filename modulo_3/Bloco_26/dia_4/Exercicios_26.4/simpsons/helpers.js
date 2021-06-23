const fs = require('fs').promises;
const crypto = require('crypto');

const simpsons = './simpsons.json';

const getAllSimpsons = async () => {
  const characters = await fs.readFile(simpsons, 'utf-8')
    .then((data) => JSON.parse(data));
  return characters;
}

const getSimpsonById = async (id) => {
  const characters = await fs.readFile(simpsons, 'utf-8')
    .then((data) => JSON.parse(data));
  const result = characters.find((char) => parseInt(char.id) === id);
  return result;
};

const registerSimpson = async (simpson) => {
  await fs.writeFile(simpsons, JSON.stringify(simpson));
};

const generateToken = () => {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = {
  getAllSimpsons,
  getSimpsonById,
  registerSimpson,
  generateToken
};
