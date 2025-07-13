const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  nom: { type: String, required: true, trim: true },
  auteur: { type: String, required: true },
  num_serie: { type: String, required: true },
  date: { type: Date, default: Date.now },
  statut: { type: String, enum: ['disponible', 'réservé', 'emprunté'], default: 'disponible' },
  date_ajout: { type: Date, default: Date.now },
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorie' },
  annee: { type: Number }
});

module.exports = mongoose.model('Book', bookSchema);
