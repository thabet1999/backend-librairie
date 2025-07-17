const mongoose = require('mongoose');

const fournisseurSchema = new mongoose.Schema({
  
  nomEntreprise: { type: String, required: true },
  siret: { type: String, required: true, unique: true },
  adresseEntreprise: { type: String },
  contactPrincipal: { type: String, required: true }
});


module.exports = mongoose.model('Fournisseur', fournisseurSchema);
