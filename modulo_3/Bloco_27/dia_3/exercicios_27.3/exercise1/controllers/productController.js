const ProductModel = require('../models/productModel');

const getAllProducts = async (_req, res) => {
  const products = await ProductModel.getAll();
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { params: { id } } = req;
  const product = await ProductModel.getById(id);
  if (!product) return res.status(404).json({ message: 'product not found' })
  return res.status(200).json(product);
};

const registerNewProduct = async (req, res) => {
  const { body: { name, brand } } = req;
  try {
    const newProduct = await ProductModel.add(name, brand);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  const { params: { id } } = req;
  try {
    const product = await ProductModel.exclude(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

const updateProduct = async (req, res) => {
  const { body: { name, brand } } = req;
  const { params: { id } } = req;
  try {
    const product = await ProductModel.update(id, name, brand);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  deleteProduct,
  updateProduct,
};
