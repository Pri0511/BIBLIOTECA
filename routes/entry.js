// routes/entryRoutes.js
const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entry');

// Insertar nueva Entrada
router.post('/api/entry', entryController.createEntry);

// Listar Entradas por Holder
router.get('/api/entry/holder/:id', entryController.getEntriesByHolder);

// Listar Entradas por día
router.get('/api/entry/dia', entryController.getEntriesByDay);

// Listar Entradas entre fechas
router.get('/api/entry/fechas', entryController.getEntriesByDateRange);

// Registrar salida o entrega
router.put('/api/entry/salida', entryController.registerCheckout);

module.exports = router;
