const mongoose = require('mongoose');
const { Schema } = mongoose;
const products = require('./product.data');

const productSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  brand: String,
  inStock: Boolean,
  fastDelivery: Boolean,
});

const Product = mongoose.model('Product', productSchema);

async function addProductsToCollection() {
  try {
    products.forEach(async (product) => {
      const newProduct = new Product(product);
      await newProduct.save();
    });
    res.json({ success: true, message: 'Data added successfully to database' });
  } catch (error) {
    res.json({ success: false, message: 'Error adding data to database' });
  }
}

module.exports = { Product, addProductsToCollection };
