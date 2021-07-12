const joi = require('joi');
const jwt = require('jsonwebtoken');

// verificacoes

const adminPasswordError = {
  statusCode: 401,
  message: 'Invalid username or password',
};

const verifyLoginInfos = (loginInfos) => (
  joi.object({
    username: joi.string().min(5).alphanum().required(),
    password: joi.string().min(5).required(),
  }).validate(loginInfos)
);

const verifyIsAdmin = (username, password) => {
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    return true;
  }
  return false;
};

// 

const ping = (_req, res) => {
  res.status(200).json({ message: 'Pong!' });
};

const login = (req, res, next) => {
  const { body } = req;
  const { error } = verifyLoginInfos(body);
  if (error) {
    return next(error);
  }

  const { username, password } = body;

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    return next(adminPasswordError);
  }

  const isAdmin = verifyIsAdmin(username, password);

  const payload = {
    username,
    admin: isAdmin,
  };
  const secret = process.env.SECRET;
  const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

  const token = jwt.sign(payload, secret, jwtConfig);
  
  return res.status(200).json({ token });
};

const users = (req, res) => {
  const { user: { username, admin } } = req;
  return res.status(200).json({ username, admin });
};

const topSecret = (_req, res) => {
  return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
};

module.exports = {
  ping,
  login,
  users,
  topSecret,
};
