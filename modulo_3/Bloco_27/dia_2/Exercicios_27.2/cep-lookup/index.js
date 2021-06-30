const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

const {
  getPong,
  getCEP,
  registerNewCEP,
  registerNewCepByAPI,
} = require('./controllers/ceplookupController');

const {
  verifyCEP,
  verifyRegisterCEPCamps,
} = require('./services/middlewares');

// Rotas

app.get('/ping', getPong);
app.get('/cep/:cep', [
  verifyCEP,
  getCEP,
]);
app.post('/cep', [
  verifyRegisterCEPCamps,
  registerNewCEP,
]);
app.post('/register/:cep', registerNewCepByAPI);

// 

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
}); //middleware error

app.listen(PORT, () => { console.log(`Rodando na porta ${PORT}`) });
