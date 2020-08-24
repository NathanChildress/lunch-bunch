const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  eventTime: Date,
  deliveries: [{type: mongoose.Schema.Types.ObjectId, ref: 'Delivery'}],
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  desc: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);