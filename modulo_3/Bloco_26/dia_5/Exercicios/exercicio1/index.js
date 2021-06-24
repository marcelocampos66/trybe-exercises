const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());

// helpers

const verifyEmail = (email) => {
  const emailRegex = /^([a-zA-Z0-9_-]+)@mail\.com$/gm;
  return emailRegex.test(email);
}

const verifyPassword = (password) => {
  const passwordRegex = /^\d{4,8}$/gm;
  return passwordRegex.test(password);
}

// Rotas

app.post('/login', (req, res) => {
  const { body: { email, password } } = req;
  const token = crypto.randomBytes(6).toString('hex');
  const emailIsOk = verifyEmail(email);
  const passwordIsOk = verifyPassword(password)
  if (emailIsOk && passwordIsOk) {
    return res.status(200).json({ token: token });
  }
  return res.status(410).json({ message: 'email or password is incorrect.' });
});

// 

app.use(
  (err, _req, res, _next) => {
    res.status(500).send({ message: err.message });
  }
);

app.listen(3000, () => { console.log('Rodando na porta 3000'); });
