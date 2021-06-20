const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  _id: Schema.Types.ObjectId,
  products: [
    {
      _id: { type: Schema.Types.ObjectId, ref: 'Product' },
      qty: Number,
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart };
