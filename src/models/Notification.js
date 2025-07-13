const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reservationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }
});

module.exports = mongoose.model('Notification', notificationSchema);
