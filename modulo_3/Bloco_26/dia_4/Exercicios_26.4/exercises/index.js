const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Rotas

app.get('/ping', (_req, res) => {
  // res.status(200).send({ message: 'pong!' });
  res.status(200).json({ message: 'pong!' });
});

app.post('/hello', (req, res) => {
  console.log(req.body);
  const { body: { name } } = req;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  console.log(req.body);
  const { body: { name, age } } = req;
  if (age > 17) {
    res.status(200).json({ message: `Hello, ${name}!` });
  }
  res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) =>{
  console.log(req.params);
  const { params: { name, age } } = req;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// 

app.use((err, _req, res) => {
  res.status(500).send({ message: err.message });
}); // middleware de erro

app.listen(3000, () => console.log('Rodando na porta 3000'));
