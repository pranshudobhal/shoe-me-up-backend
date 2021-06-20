const { User } = require('../models/user.model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Wishlist } = require('../models/wishlist.model');
const { Cart } = require('../models/cart.model');

const createNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const saltRounds = 10;
    const user = await User.find({ email });

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (user.length >= 1) {
      return res.status(409).json({ success: false, message: 'User already exists!' });
    } else {
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      });

      const newCart = new Cart({
        _id: newUser._id,
        products: [],
      });

      const newWishlist = new Wishlist({
        _id: newUser._id,
        products: [],
      });

      const token = jwt.sign({ userID: newUser._id }, process.env.SECRET, { expiresIn: '24h' });

      await newUser.save();
      await newCart.save();
      await newWishlist.save();

      res.status(201).json({ success: true, message: 'User created!', token });
    }
  } catch (error) {
    res.json({ success: false, message: 'Error creating new user!', errorMessage: error.message });
  }
};

module.exports = { createNewUser };
