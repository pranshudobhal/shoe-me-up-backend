const express = require('express');
const router = express.Router();
const { getAllProductsInCart, addProductInCart, clearCart, updateProductInCart, deleteProductFromCart } = require('../controllers/cart.controller');

router.get('/', getAllProductsInCart);
router.post('/', addProductInCart);
router.delete('/', clearCart);

router.post('/:productID', updateProductInCart);
router.delete('/:productID', deleteProductFromCart);

module.exports = router;
