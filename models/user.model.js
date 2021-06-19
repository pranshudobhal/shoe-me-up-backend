const mongoose = require('mongoose');
require('mongoose-type-email');
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: [true, 'First Name cannot be empty'],
  },
  lastName: {
    type: String,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, 'Email cannot be empty'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
