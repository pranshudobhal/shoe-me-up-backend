const { Wishlist } = require('../models/wishlist.model');

const getAllProductsInWishlist = async (req, res) => {
  const { userID } = req.params;
  try {
    const wishlist = await Wishlist.findById(userID).populate('products._id');
    const wishlistProducts = wishlist.products.map((productItem) => {
      return { ...productItem._id._doc };
    });

    const finalWishlist = { _id: wishlist._id, products: wishlistProducts };

    res.json({ success: true, wishlist: finalWishlist });
  } catch (error) {
    res.json({ success: false, message: 'Error retrieving wishlist', errorMessage: error.message });
  }
};

const addProductInWishlist = async (req, res) => {
  const { userID } = req.params;
  let { product } = req.body;
  try {
    const user = await Wishlist.findById(userID);
    if (!user) {
      const newWishlist = new Wishlist({
        _id: userID,
        products: [{ _id: product._id }],
      });
      await newWishlist.save();
      res.json({ success: true, message: 'New wishlist created and product added', newWishlist });
    } else {
      const newProduct = { _id: product._id };
      user.products.push(newProduct);
      await user.save();
      res.json({ success: true, message: 'Product added to exisitng wishlist', user });
    }
  } catch (error) {
    res.json({ success: false, message: 'Error adding product to wishlist', errorMessage: error.message });
  }
};

const deleteProductFromWishlist = async (req, res) => {
  const { productID, userID } = req.params;

  try {
    const user = await Wishlist.findById(userID);
    await user.products.remove(productID);
    await user.save();

    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: 'Error deleting product from wishlist', errorMessage: error.message });
  }
};

module.exports = { getAllProductsInWishlist, addProductInWishlist, deleteProductFromWishlist };
