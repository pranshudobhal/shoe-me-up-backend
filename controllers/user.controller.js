const { User } = require('../models/user.model');

const getUser = async (req, res) => {
  try {
    const { userID } = req.user;
    const user = await User.findById(userID).select('_id email firstName lastName');
    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: 'Error retrieving user data', errorMessage: error.message });
  }
};

module.exports = { getUser };
