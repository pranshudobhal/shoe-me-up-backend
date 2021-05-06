const mongoose = require('mongoose')
const { Schema } = mongoose;
const products = require('./product.data.js');

const productSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  material: String,
  brand: String,
  inStock: Boolean,
  fastDelivery: Boolean,
  ratings: Number,
  offer: String,
  idealFor: String,
  level: String,
  color: String
}) 

const Product = mongoose.model('Product', productSchema);

async function addProductsToCollection(){
  try{
    products.forEach(async (product) => {
      const newProduct = new Product(product);
      const savedProduct = await newProduct.save();
      console.log("Data added successfully");
    })
  } catch(error) {
    console.log('Error adding data ', error)
  }
}

module.exports = { Product, addProductsToCollection }
