const Exemplaire = require('../models/Exemplaire');

exports.createExemplaire = async (req, res) => {
  try {
    const exemplaire = new Exemplaire(req.body);
    await exemplaire.save();
    res.status(201).json(exemplaire);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllExemplaires = async (req, res) => {
  try {
    const exemplaires = await Exemplaire.find();
    res.status(200).json(exemplaires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExemplaireById = async (req, res) => {
  try {
    const exemplaire = await Exemplaire.findById(req.params.id);
    if (!exemplaire) return res.status(404).json({ message: 'Exemplaire not found' });
    res.status(200).json(exemplaire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateExemplaire = async (req, res) => {
  try {
    const exemplaire = await Exemplaire.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!exemplaire) return res.status(404).json({ message: 'Exemplaire not found' });
    res.status(200).json(exemplaire);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteExemplaire = async (req, res) => {
  try {
    const exemplaire = await Exemplaire.findByIdAndDelete(req.params.id);
    if (!exemplaire) return res.status(404).json({ message: 'Exemplaire not found' });
    res.status(200).json({ message: 'Exemplaire deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
