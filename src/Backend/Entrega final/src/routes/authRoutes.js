const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/register', authController.register); 
router.post('/login', authController.login); 
router.get('/', authController.getAllUsers);
router.put('/:id', authController.updateUser); 
router.delete('/:id', authController.deleteUser); 
router.post('/reset-password', authController.resetPassword); 

module.exports = router;
