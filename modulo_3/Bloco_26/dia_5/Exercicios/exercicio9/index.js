const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// helpers

const users = [
  {
    id: 2,
    user: 'marcos',
    isActive:true
  },
  {
    id: 3,
    user: 'paulo',
    isActive:true

  },
   {
    id: 4,
    user: 'roger',
    isActive:false
  }
]

const findUserAndChangeStatus = (id, status) => {
  const user = users.find((user) => user.id === id);
  if (!user) return false;
  user.isActive = status;
  console.log(users);
  return true;
};

// 

// Rotas

app.put('/user/:id', (req, res) => {
  const { params: { id } } = req;
  const { body: { status } } = req;
  if (typeof status !== 'boolean') {
    return res.status(401).json({ message: "status isn't a boolean" });
  }
  const isChanged = findUserAndChangeStatus(parseInt(id), status);
  if (!isChanged) return res.status(401).json({ message: "user isn't found" });
  return res.status(200).end();
});

// 

app.use((err, _req, res, _next) => {
  res.status(500).send({ message: err.message });
}); //middleware error

app.listen(3000, () => { console.log('Rodando na porta 3000') });
