// routes/holderRoutes.js
const express = require('express');
const router = express.Router();
const holderController = require('../controllers/holders');

// Insertar nuevo Holder
router.post('/api/holder', holderController.createHolder);

// Modificar Holder por ID
router.put('/api/holder/:id', holderController.updateHolder);

// Listar todos los Holders
router.get('/api/holder', holderController.getHolders);

// Listar Holder por ID
router.get('/api/holder/:id', holderController.getHolderById);

// Activar Holder
router.put('/api/holder/activate', holderController.activateHolder);

// Inactivar Holder
router.put('/api/holder/unactivate', holderController.deactivateHolder);

module.exports = router;
