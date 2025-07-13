const express = require('express');
const router = express.Router();
const pretController = require('../controllers/PretController');

router.post('/', pretController.createPret);
router.get('/', pretController.getAllPrets);
router.get('/:id', pretController.getPretById);
router.put('/:id', pretController.updatePret);
router.delete('/:id', pretController.deletePret);

module.exports = router;
