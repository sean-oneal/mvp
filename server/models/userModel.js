const Mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api/waitlist');

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true, index: true },
  name: String,
  email: String,
  slack: String,
  phone: String
});

module.exports = mongoose.model('User', userSchema);