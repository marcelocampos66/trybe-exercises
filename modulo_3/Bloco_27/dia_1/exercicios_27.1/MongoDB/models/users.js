const connection = require('./connection');
const { ObjectId } = require('mongodb');

const registerUser = async (user) => {
  const { firstName, lastName, email, password } = user;
  return connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then((result) => result.ops[0]);
};

const getAllUsers = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((result) => result)
};

const getUserById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  return connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)))
    .then((result) => result);
};

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const chosenUser = await getUserById(id);
  if (!chosenUser) {
    return null;
  }
  const newInfos = { firstName, lastName, email, password }
  const userId = ObjectId(id);
  return connection()
    .then((db) => db.collection('users')
    .updateOne({ _id: userId }, { $set: newInfos }))
    .then(() => ({
      id: ObjectId(id),
      firstName,
      lastName,
      email,
    }));
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
};
