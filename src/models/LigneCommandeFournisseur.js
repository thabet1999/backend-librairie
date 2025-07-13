const mongoose = require('mongoose');

const ligneCommandeSchema = new mongoose.Schema({
  idCommandeFournisseur: { type: mongoose.Schema.Types.ObjectId, ref: 'CommandeFournisseur', required: true },
  idLivre: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  quantite: { type: Number, required: true },
  prixUnitaire: { type: Number, required: true }
});

module.exports = mongoose.model('LigneCommandeFournisseur', ligneCommandeSchema);
