const LigneCommandeFournisseur = require('../models/LigneCommandeFournisseur');

exports.createLigneCommande = async (req, res) => {
  try {
    const ligne = new LigneCommandeFournisseur(req.body);
    await ligne.save();
    res.status(201).json(ligne);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllLignesCommande = async (req, res) => {
  try {
    const lignes = await LigneCommandeFournisseur.find();
    res.status(200).json(lignes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLigneCommandeById = async (req, res) => {
  try {
    const ligne = await LigneCommandeFournisseur.findById(req.params.id);
    if (!ligne) return res.status(404).json({ message: 'Ligne not found' });
    res.status(200).json(ligne);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateLigneCommande = async (req, res) => {
  try {
    const ligne = await LigneCommandeFournisseur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ligne) return res.status(404).json({ message: 'Ligne not found' });
    res.status(200).json(ligne);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLigneCommande = async (req, res) => {
  try {
    const ligne = await LigneCommandeFournisseur.findByIdAndDelete(req.params.id);
    if (!ligne) return res.status(404).json({ message: 'Ligne not found' });
    res.status(200).json({ message: 'Ligne deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
