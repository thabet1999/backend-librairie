const Fournisseur = require('../models/Fournisseur');

exports.createFournisseur = async (req, res) => {
  try {
    const fournisseur = new Fournisseur(req.body);
    await fournisseur.save();
    res.status(201).json(fournisseur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllFournisseurs = async (req, res) => {
  try {
    const fournisseurs = await Fournisseur.find();
    res.status(200).json(fournisseurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFournisseurById = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findById(req.params.id);
    if (!fournisseur) return res.status(404).json({ message: 'Fournisseur not found' });
    res.status(200).json(fournisseur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fournisseur) return res.status(404).json({ message: 'Fournisseur not found' });
    res.status(200).json(fournisseur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findByIdAndDelete(req.params.id);
    if (!fournisseur) return res.status(404).json({ message: 'Fournisseur not found' });
    res.status(200).json({ message: 'Fournisseur deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
