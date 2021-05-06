const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { extend } = require('lodash');
const { Cart } = require('../models/cart.model');
const { getAllProductsInCart, addProductInCart, updateProductInCart, deleteProductFromCart } = require('../controllers/cart.controller');


router.get('/', getAllProductsInCart);
router.post('/', addProductInCart);
router.post('/:productID', updateProductInCart);
router.delete('/:productID', deleteProductFromCart);



module.exports = router;