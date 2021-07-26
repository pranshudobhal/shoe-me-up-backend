const express = require('express');
const router = express.Router();
const { makePayment, verifyPayment } = require('../controllers/payment.controller');

router.post('/orders', makePayment);
router.post('/success', verifyPayment);

module.exports = router;
