const express = require('express');
const bodyParser = require('body-parser');
const authentication = require('./authentication');

const app = express();
app.use(bodyParser.json());
app.use(authentication);

// arquivo
const simpsons = require('./simpsons.json');

// helpers
const { getAllSimpsons, getSimpsonById, registerSimpson, generateToken } = require('./helpers');

// Rotas

app.get('/simpsons', (_req, res) => {
  res.status(200).json(simpsons);
});

app.get('/simpsons/:id', async (req, res) => {
  const { params: { id } } = req;
  const chosenSimpson = await getSimpsonById(parseInt(id));
  if (!chosenSimpson) {
    res.status(404).json({ message: 'simpson not found' });
  }
  res.status(200).json(chosenSimpson);
});

app.post('/simpsons', async (req, res) => {
  const { body: { id , name } } = req;
  if (!Number(id)) return res.status(410).json({ message: 'invalid id' });
  const characters = await getAllSimpsons();
  const isOnList = characters.some((char) => char.id === id);
  if (isOnList) {
    return res.status(409).json({ message: 'id already exists' });
  }
  const newArray = [...characters, { id, name }];
  await registerSimpson(newArray);
  res.status(204).end();
});

app.post('/signup', (req, res) => {
  const { body: { email, password, firstName, phone } } = req;
  const newArray = [email, password, firstName, phone];
  const token = generateToken();

  if (newArray.includes(undefined)) {
    res.status(401).json({ message: 'missing fields' });
  }
  res.status(200).json({ message: 'Cadastrado com Sucesso!', token });
});

// 

app.use((err, _req, res) => {
  res.status(500).send({ message: err.message });
}); // middleware de erro

app.listen(3000, () => console.log('Rodando na porta 3000'));
