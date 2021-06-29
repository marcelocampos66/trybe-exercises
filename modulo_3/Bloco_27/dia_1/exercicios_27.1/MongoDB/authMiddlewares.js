const verifyInputsExists = (req, res, next) => {
  const { body } = req;
  const { firstName, lastName, email, password } = body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos sao obrigatorios'});
  }
  next();
};

const verifyPassword = (req, res, next) => {
  const { body: { password } } = req;
  const erroJson = {
    "error": true,
    "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  };
  if (password.length < 6) {
    return res.status(400).json(erroJson);
  }
  next();
};

module.exports = {
  verifyInputsExists,
  verifyPassword,
};
