const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const { Product } = require('../models/product.model');
const { extend } = require('lodash');
const { getAllProducts, getProductById } = require('../controllers/product.controller');


router.get('/', getAllProducts);
router.get('/:productID', getProductById);

module.exports = router;