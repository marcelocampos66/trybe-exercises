const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// helpers

const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]
  }
];

const getComentsByName = (name) => users.find((user) => user.user === name);

// 

// Rotas

app.get('/user/:name', (req, res) => {
  const { params: { name } } = req;
  const user = getComentsByName(name);
  if (user) {
    const { comments } = user;
    return res.status(200).json(comments);
  }
  return res.status(410).json({ message: 'user not found' });
});

//

app.use((err, _req, res, _next) => {
  res.status(500).send({ message: err.message });
});

app.listen(3000, () => { console.log('Rodando na porta 3000') });
