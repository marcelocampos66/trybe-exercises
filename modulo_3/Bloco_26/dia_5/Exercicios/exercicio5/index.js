const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// helpers

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// 

// Rotas

app.get('/:operacao/:numero1/:numero2', [
  (req, res, next) => {
    const { params: { operacao, numero1, numero2 } } = req;
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);
    if (operacao === 'soma') {
      return res.status(200).json({ resultado: sum(num1, num2) });
    }
    next();
  },
  (req, res, next) => {
    const { params: { operacao, numero1, numero2 } } = req;
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);
    if (operacao === 'subtracao') {
      return res.status(200).json({ resultado: subtract(num1, num2) });
    }
    next();
  },
  (req, res, next) => {
    const { params: { operacao, numero1, numero2 } } = req;
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);
    if (operacao === 'multiplicacao') {
      return res.status(200).json({ resultado: multiply(num1, num2) });
    }
    next();
  },
  (req, res) => {
    const { params: { operacao, numero1, numero2 } } = req;
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);
    if (operacao === 'divisao') {
      return res.status(200).json({ resultado: divide(num1, num2) });
    }
    return res.status(410).json({ message: 'Operacao invalida!'})
  },
]);

//

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
}); //middleware error

app.listen(3000, () => { console.log('Rodando na porta 3000') });
