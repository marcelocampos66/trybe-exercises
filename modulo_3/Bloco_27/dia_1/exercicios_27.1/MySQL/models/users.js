const connection = require('./connection');

const format = (user) => {
  const { id, first_name, last_name, email } = user;
  return ({
    id,
    firstName: first_name,
    lastName: last_name,
    email,
  });
};

const registerUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO exercises.users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  return connection.execute(
    query,
    [firstName, lastName, email, password],
  ).then(([result]) => ({
    id: result.insertId,
    firstName,
    lastName,
    email,
  })); 
};

const getAllUsers = async () => {
  const query = 'SELECT * FROM exercises.users';
  return connection.execute(
    query,
  ).then(([result]) => result.map(format));
};

const getUserById = async (id) => {
  const query = 'SELECT * FROM exercises.users WHERE id = ?';
  const user = await connection.execute(
    query,
    [id],
  ).then(([result]) => result.length ? result[0] : null);
  if (!user) return;
  return format(user);
};

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const chosenUser = await getUserById(id);
  if (!chosenUser) {
    return null;
  }
  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';
  await connection.execute(
    query,
    [firstName, lastName, email, password, id],
  ).then(([result]) => result);
  return ({ id, firstName, lastName, email });
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
};
