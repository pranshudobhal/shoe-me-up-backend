const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controllers/product.controller');

router.get('/', getAllProducts);
router.get('/:productID', getProductById);

module.exports = router;
