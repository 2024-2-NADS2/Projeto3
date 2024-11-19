const express = require('express');
const router = express.Router();
const ongController = require('../controllers/ongController'); 


router.get('/', ongController.getAllOngs);


router.post('/', ongController.createOng);


router.get('/:cnpj', ongController.getOngByCnpj);


router.delete('/:cnpj', ongController.deleteOng);


router.put('/:cnpj', ongController.updateOng);

module.exports = router;
