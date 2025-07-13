const express = require('express');
const router = express.Router();
const ligneCommandeController = require('../controllers/LigneCommandeController');

router.post('/', ligneCommandeController.createLigneCommande);
router.get('/', ligneCommandeController.getAllLignesCommande);
router.get('/:id', ligneCommandeController.getLigneCommandeById);
router.put('/:id', ligneCommandeController.updateLigneCommande);
router.delete('/:id', ligneCommandeController.deleteLigneCommande);

module.exports = router;
