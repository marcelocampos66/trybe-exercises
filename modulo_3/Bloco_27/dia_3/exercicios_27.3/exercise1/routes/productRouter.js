const express = require('express');
const productRouter = express.Router();

const {
  getAllProducts,
  getProductById,
  registerNewProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productController');

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/', registerNewProduct);
productRouter.delete('/:id', deleteProduct);
productRouter.put('/:id', updateProduct);

module.exports = productRouter;
