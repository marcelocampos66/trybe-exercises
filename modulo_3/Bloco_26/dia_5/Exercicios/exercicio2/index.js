const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

// helpers

const verifyToken = (token) => {
  if (typeof token === 'string' && token.length === 12) {
    return true;
  }
  return false;
}

const btcFetch = async () => {
  const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
  const result = await axios.get(endpoint).then(({ data }) => data);
  return result;
};

//

// Rotas

app.get('/btc/price', async (req, res) => {
  const { headers: { authorization } } = req;
  const tokenIsValid = verifyToken(authorization);
  if (tokenIsValid) {
    const btc = await btcFetch();
    return res.status(200).json(btc);
  }
  return res.status(410).json({ message: 'email or password is incorrect.' });
});

//

app.listen(3000, () => { console.log('Rodando na porta 3000') });
