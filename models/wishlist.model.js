const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  _id: Schema.Types.ObjectId,
  products: [
    {
      _id: { type: Schema.Types.ObjectId, ref: 'Product' },
    },
  ],
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = { Wishlist };
