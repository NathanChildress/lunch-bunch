const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  photoURL: String,
  friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  bio: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);