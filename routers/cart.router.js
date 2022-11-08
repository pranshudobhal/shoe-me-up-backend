const express = require('express');
const router = express.Router();
const { getAllProductsInCart, addProductInCart, updateProductInCart, deleteProductFromCart } = require('../controllers/cart.controller');

router.get('/', getAllProductsInCart);
router.post('/', addProductInCart);
router.post('/:productID', updateProductInCart);
router.delete('/:productID', deleteProductFromCart);

module.exports = router;
