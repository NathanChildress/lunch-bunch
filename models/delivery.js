const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deilverySchema = new Schema({
  event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
  eventTime: Date,
  items: [String],
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  desc: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Delivery', deilverySchema);