const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { extend } = require('lodash');
const { Wishlist } = require('../models/wishlist.model');
const { getAllProductsInWishlist, addProductInWishlist, deleteProductFromWishlist } = require('../controllers/wishlist.controller');


router.get('/', getAllProductsInWishlist);
router.post('/', addProductInWishlist);
router.delete('/:productID', deleteProductFromWishlist);

module.exports = router;