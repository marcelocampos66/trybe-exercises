const express = require('express');

const exerciseRouter = express.Router();

const {
  ping,
  login,
  users,
  topSecret,
} = require('../controllers/exerciseController');

const { auth, authAdmin } = require('../middlewares/authenticationMiddlewares');

exerciseRouter.get('/ping', ping);
exerciseRouter.post('/login', login);
exerciseRouter.get('/users/me', [
  auth,
  users,
]);
exerciseRouter.get('/top-secret', [
  auth,
  authAdmin,
  topSecret,
]);

module.exports = exerciseRouter;
