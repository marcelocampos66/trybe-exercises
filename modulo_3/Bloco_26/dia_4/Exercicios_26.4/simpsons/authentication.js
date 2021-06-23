module.exports = (_req, res, next) => {
  const { generateToken } = require('./helpers');

  const token = generateToken();
  // const token = 12345;

  if (!token || token.length !== 16) {
    res.status(401).json({ message: 'Token inválido!' });
  };
  next();
};
