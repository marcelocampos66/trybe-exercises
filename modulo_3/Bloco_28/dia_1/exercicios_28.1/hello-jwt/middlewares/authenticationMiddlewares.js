const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const auth = (req, _res, next) => {
  const { headers: { authorization } } = req;

  if (!authorization) {
    const err = {
      statusCode: 401,
      message: 'Token not found',
    };
    return next(err);
  }
  
  try {
    const payload = jwt.verify(authorization, secret);
    req.user = payload;
    return next();
  } catch (error) {
    error.statusCode = 401;
    return next(error);
  }
};

const authAdmin = (req, _res, next) => {
  const { user } = req;
  if (!user) {
    const err = {
      statusCode: 401,
      message: 'This endpoint requires authentication',
    };
    return next(err);
  }
  if (!user.admin) {
    const err = {
      statusCode: 403,
      message: 'Restricted access',
    };
    return next(err);
  }
  return next();
};

module.exports = {
  auth,
  authAdmin,
};
