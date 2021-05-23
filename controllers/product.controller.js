const { Product } = require('../models/product.model');

const getAllProducts = async (req, res) => {
  try{
    const products = await Product.find({});
    res.json({ success: true, products })
  } catch(error) {
    res.json({ success: false, message: "Error retrieving products", errorMessage: error.message})
  }
}

const getProductById = async (req, res) => {
  const { productID } = req.params;
  try{
    const product = await Product.findById(productID)
    res.json({ success: true, product })
  } catch(error) {
    res.json({ success: false, message: "Error retrieving product", errorMessage: error.message})
  }
}

module.exports = { getAllProducts, getProductById }