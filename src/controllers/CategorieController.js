const Categorie = require('../models/Categorie');

exports.createCategorie = async (req, res) => {
  try {
    const categorie = new Categorie(req.body);
    await categorie.save();
    res.status(201).json(categorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategorieById = async (req, res) => {
  try {
    const categorie = await Categorie.findById(req.params.id);
    if (!categorie) return res.status(404).json({ message: 'Categorie not found' });
    res.status(200).json(categorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!categorie) return res.status(404).json({ message: 'Categorie not found' });
    res.status(200).json(categorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByIdAndDelete(req.params.id);
    if (!categorie) return res.status(404).json({ message: 'Categorie not found' });
    res.status(200).json({ message: 'Categorie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};