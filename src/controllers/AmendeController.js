const Amende = require('../models/Amende');

exports.createAmende = async (req, res) => {
  try {
    const amende = new Amende(req.body);
    await amende.save();
    res.status(201).json(amende);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllAmendes = async (req, res) => {
  try {
    const amendes = await Amende.find();
    res.status(200).json(amendes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAmendeById = async (req, res) => {
  try {
    const amende = await Amende.findById(req.params.id);
    if (!amende) return res.status(404).json({ message: 'Amende non trouvée' });
    res.status(200).json(amende);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAmende = async (req, res) => {
  try {
    const amende = await Amende.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!amende) return res.status(404).json({ message: 'Amende non trouvée' });
    res.status(200).json(amende);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAmende = async (req, res) => {
  try {
    const amende = await Amende.findByIdAndDelete(req.params.id);
    if (!amende) return res.status(404).json({ message: 'Amende non trouvée' });
    res.status(200).json({ message: 'Amende supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
