const express = require('express');
const router = express.Router();
const CommandeFournisseurController = require('../controllers/CommandeFournisseurController');

router.post('/', CommandeFournisseurController.createCommandeFournisseur);
router.get('/', CommandeFournisseurController.getAllCommandesFournisseur);
router.get('/:id', CommandeFournisseurController.getCommandeFournisseurById);
router.put('/:id', CommandeFournisseurController.updateCommandeFournisseur);
router.delete('/:id', CommandeFournisseurController.deleteCommandeFournisseur);

module.exports = router;
