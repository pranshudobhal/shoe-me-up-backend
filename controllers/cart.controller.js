const { Cart } = require('../models/cart.model');

const getAllProductsInCart = async (req, res) => {
  try {
    const { userID } = req.user;

    const cart = await Cart.findById(userID).populate('products._id');
    const cartProducts = cart.products.map((productItem) => {
      return { ...productItem._id._doc, qty: productItem.qty };
    });

    const finalCart = { _id: cart._id, products: cartProducts };

    res.json({ success: true, cart: finalCart });
  } catch (error) {
    res.json({ success: false, message: 'Error retrieving cart', errorMessage: error.message });
  }
};

const addProductInCart = async (req, res) => {
  try {
    const { userID } = req.user;
    let { product } = req.body;

    const user = await Cart.findById(userID);
    if (!user) {
      const newCart = new Cart({
        _id: userID,
        products: [{ _id: product._id, qty: 1 }],
      });
      await newCart.save();
      res.json({ success: true, message: 'New cart created and product added', newCart });
    } else {
      const newProduct = { _id: product._id, qty: 1 };
      user.products.push(newProduct);
      await user.save();
      res.json({ success: true, message: 'Product added to exisitng cart', user });
    }
  } catch (error) {
    res.json({ success: false, message: 'Error adding product to cart', errorMessage: error.message });
  }
};

const updateProductInCart = async (req, res) => {
  try {
    let { qty } = req.body;
    const { userID } = req.user;
    const { productID } = req.params;

    const user = await Cart.findById(userID);
    const product = user.products.map((product) => {
      if (product.id === productID) {
        return (product.qty = qty);
      }
      return product;
    });
    await user.save();
    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: 'Error updating product in cart', errorMessage: error.message });
  }
};

const deleteProductFromCart = async (req, res) => {
  try {
    const { productID } = req.params;
    const { userID } = req.user;

    const user = await Cart.findById(userID);
    await user.products.remove(productID);
    await user.save();
    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: 'Error deleting product from cart', errorMessage: error.message });
  }
};

module.exports = { getAllProductsInCart, addProductInCart, updateProductInCart, deleteProductFromCart };
