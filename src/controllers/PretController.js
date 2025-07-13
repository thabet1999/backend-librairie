const Pret = require('../models/Pret');

exports.createPret = async (req, res) => {
  try {
    const pret = new Pret(req.body);
    await pret.save();
    res.status(201).json(pret);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllPrets = async (req, res) => {
  try {
    const prets = await Pret.find();
    res.status(200).json(prets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPretById = async (req, res) => {
  try {
    const pret = await Pret.findById(req.params.id);
    if (!pret) return res.status(404).json({ message: 'Pret not found' });
    res.status(200).json(pret);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePret = async (req, res) => {
  try {
    const pret = await Pret.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pret) return res.status(404).json({ message: 'Pret not found' });
    res.status(200).json(pret);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePret = async (req, res) => {
  try {
    const pret = await Pret.findByIdAndDelete(req.params.id);
    if (!pret) return res.status(404).json({ message: 'Pret not found' });
    res.status(200).json({ message: 'Pret deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
