const Razorpay = require('razorpay');
const crypto = require('crypto');

const makePayment = async (req, res) => {
  try {
    const { totalPrice } = req.body;

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: totalPrice * 100,
      currency: 'INR',
      receipt: 'order_rcptid_11',
    };

    const order = await instance.orders.create(options);

    if (!order) {
      return res.status(500).json({ success: false, message: 'Some error occurred' });
    }

    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Payment Error' });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;

    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest('hex');

    if (digest !== razorpaySignature) return res.status(400).json({ success: false, message: 'Transaction not legit!' });

    res.json({
      success: true,
      message: 'Payment successful!',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error verifying transaction!' });
  }
};

module.exports = { makePayment, verifyPayment };
