const mongoose = require('mongoose');

const pretSchema = new mongoose.Schema({
  reservationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation', required: true },
  date_pret: { type: Date, default: Date.now },
  date_end: { type: Date }
});

module.exports = mongoose.model('Pret', pretSchema);
