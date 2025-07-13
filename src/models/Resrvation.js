const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date_start: { type: Date, required: true },
  date_end: { type: Date },
  statut: { type: String, enum: ['en_attente', 'validée', 'annulée'], default: 'en_attente' }
});

module.exports = mongoose.model('Reservation', reservationSchema);
