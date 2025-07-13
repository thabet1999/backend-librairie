const mongoose = require('mongoose');

const exemplaireSchema = new mongoose.Schema({
  idLivre: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  codeBarre: { type: String, required: true, unique: true },
  statutExemplaire: {
    type: String,
    enum: ['disponible', 'emprunté', 'réservé', 'perdu', 'en réparation'],
    default: 'disponible'
  },
  localisation: { type: String, required: true },
  dateAcquisition: { type: Date, default: Date.now },
  etat: {
    type: String,
    enum: ['neuf', 'bon', 'usagé', 'endommagé'],
    default: 'bon'
  }
});

module.exports = mongoose.model('Exemplaire', exemplaireSchema);
