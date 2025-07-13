const mongoose = require('mongoose');

const commandeFournisseurSchema = new mongoose.Schema({
  idFournisseur: { type: mongoose.Schema.Types.ObjectId, ref: 'Fournisseur', required: true },
  idEmploye: { type: mongoose.Schema.Types.ObjectId, ref: 'Employe', required: true },
  dateCommande: { type: Date, required: true },
  statutCommande: {
    type: String,
    enum: ['en attente', 'en cours', 'livrée', 'annulée'],
    default: 'en attente'
  },
  dateLivraisonPrevue: { type: Date },
  dateLivraisonEffective: { type: Date },
  montantTotal: { type: Number, required: true }
});

module.exports = mongoose.model('CommandeFournisseur', commandeFournisseurSchema);
