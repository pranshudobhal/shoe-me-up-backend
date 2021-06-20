const express = require('express');
const router = express.Router();
const { getAllProductsInCart, addProductInCart, updateProductInCart, deleteProductFromCart } = require('../controllers/cart.controller');

router.get('/:userID', getAllProductsInCart);
router.post('/:userID', addProductInCart);
router.post('/:userID/:productID', updateProductInCart);
router.delete('/:userID/:productID', deleteProductFromCart);

module.exports = router;
