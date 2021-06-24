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

const getFilteredComments = (string) => {
  const str = string.toLowerCase();
  const filteredUsers = users
    .filter((user) => user.comments.find((comment) => comment.toLowerCase().includes(str)));
  const allComments = filteredUsers.reduce((acc, user) => [...acc, ...user.comments], []);
  const result = allComments.filter((comment) => comment.toLowerCase().includes(str));
  return result;
};

const getAllComments = () => users
  .reduce((acc, user) => [...acc, ...user.comments], []);
  
// 

// Rotas

app.get('/comments', (req, res) => {
  const { query: { filter } } = req;
  if (!filter) {
    const allComments = getAllComments();
    return res.status(200).json(allComments);
  }
  const comments = getFilteredComments(filter);
  return res.status(200).json(comments);
});

// 

app.use((err, _req, res, _next) => {
  res.status(500).send({ message: err.message });
}); //middleware error

app.listen(3000, () => { console.log('Rodando na porta 3000') });
