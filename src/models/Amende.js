const mongoose = require('mongoose');

const amendeSchema = new mongoose.Schema({
  idPret: { type: mongoose.Schema.Types.ObjectId, ref: 'Pret', required: true },
  idUtilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  montant: { type: Number, required: true },
  motif: { type: String, required: true },
  dateCreationAmende: { type: Date, default: Date.now },
  datePaiement: { type: Date },
  statutAmende: {
    type: String,
    enum: ['impayée', 'payée', 'annulée'],
    default: 'impayée'
  }
});

module.exports = mongoose.model('Amende', amendeSchema);
