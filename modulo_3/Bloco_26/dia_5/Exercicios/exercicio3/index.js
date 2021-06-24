const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// helpers

const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: "Hoje o dia está maneiro!"
  },
  {
    id: 3,
    author: "Rodrigo Garga",
    comment: "To aqui também"
  }
];

const getPostById = (id) => posts.find((post) => post.id === id);

// 

// Rotas

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
  const { params: { id } } = req;
  const getPost = getPostById(parseInt(id));
  if (getPost) {
    return res.status(200).json(getPost);
  }
  return res.status(401).json({ message: 'id not found'});
});

// 

app.use((err, _req, res, _next) => {
  res.status(500).send({ message: err.message });
}); //middleware error

app.listen(3000, () => { console.log('Rodando na porta 3000') });
