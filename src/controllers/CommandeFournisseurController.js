const CommandeFournisseur = require('../models/CommandeFournisseur');

// Créer une commande fournisseur
exports.createCommandeFournisseur = async (req, res) => {
  try {
    const commande = new CommandeFournisseur(req.body);
    await commande.save();
    res.status(201).json(commande);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupérer toutes les commandes fournisseurs
exports.getAllCommandesFournisseur = async (req, res) => {
  try {
    const commandes = await CommandeFournisseur.find();
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer une commande par ID
exports.getCommandeFournisseurById = async (req, res) => {
  try {
    const commande = await CommandeFournisseur.findById(req.params.id);
    if (!commande) return res.status(404).json({ message: 'Commande non trouvée' });
    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Modifier une commande
exports.updateCommandeFournisseur = async (req, res) => {
  try {
    const commande = await CommandeFournisseur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!commande) return res.status(404).json({ message: 'Commande non trouvée' });
    res.status(200).json(commande);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une commande
exports.deleteCommandeFournisseur = async (req, res) => {
  try {
    const commande = await CommandeFournisseur.findByIdAndDelete(req.params.id);
    if (!commande) return res.status(404).json({ message: 'Commande non trouvée' });
    res.status(200).json({ message: 'Commande supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
