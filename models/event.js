const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  eventTime: Date,
  deliveries: [{type: mongoose.Schema.Types.ObjectId, ref: 'Delivery'}],
  attendees: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  guests: [{
      name: String,
      address: String
    }],
  desc: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);