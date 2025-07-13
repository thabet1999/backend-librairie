const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
  nomCategorie: { type: String, required: true, unique: true },
  descriptionCategorie: { type: String },
  codeClassification: { type: String } // ex : "005.133"
});

module.exports = mongoose.model('Categorie', categorieSchema);
