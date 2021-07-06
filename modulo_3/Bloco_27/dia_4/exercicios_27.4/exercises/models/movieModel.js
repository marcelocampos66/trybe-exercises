const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const findById = async (id) => {
  const movie = await connection()
    .then((db) => db.collection('movies').findOne({ _id: ObjectId(id) }));
  if (!movie) return null;
  const { title, releaseYear, directedBy } = movie;
  return { id, title, releaseYear, directedBy };
};

module.exports = {
  create,
  getAll,
  findById,
};
