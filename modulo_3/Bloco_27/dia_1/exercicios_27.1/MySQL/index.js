const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

// helpers & middlewares

const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
} = require('./models/users');

const {
  verifyInputsExists,
  verifyPassword,
} = require('./authMiddlewares');

// Rotas

app.post('/user', [
  verifyInputsExists,
  verifyPassword,
  async (req, res) => {
    const { body } = req;
    const { firstName, lastName, email, password } = body;
    const insertedUser = await registerUser(firstName, lastName, email, password);
    return res.status(201).json(insertedUser);
  },
]);

app.get('/user', async (_req, res) => {
  const allUsers = await getAllUsers();
  return res.status(200).json(allUsers);
});

app.get('/user/:id', async (req, res) => {
  const { params: { id } } = req;
  const erroJson = {
    "error": true,
    "message": "Usuário não encontrado"
  };
  const user = await getUserById(id);
  if(!user) return res.status(404).json(erroJson);
  return res.status(200).json(user);
});

app.put('/user/:id', [
  verifyInputsExists,
  verifyPassword,
  async (req, res) => {
    const { body } = req;
    const { params: { id } } = req;
    const erroJson = {
      "error": true,
      "message": "Usuário não encontrado"
    };
    const updatedUser = await updateUser(id, body);
    if (!updatedUser) return res.status(404).json(erroJson);
    return res.status(200).json(updatedUser);
  },
]);

// 

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
}); //middleware error

app.listen(PORT, () => { console.log(`Rodando na porta ${PORT}`) });
