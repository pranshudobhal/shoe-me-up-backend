const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { extend } = require('lodash');
const { Wishlist } = require('../models/wishlist.model');
const { getAllProductsInWishlist, addProductInWishlist, deleteProductFromWishlist } = require('../controllers/wishlist.controller');

router.get('/:userID', getAllProductsInWishlist);
router.post('/:userID', addProductInWishlist);
router.delete('/:userID/:productID', deleteProductFromWishlist);

module.exports = router;