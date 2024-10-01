// routes/laptopRoutes.js
const express = require('express');
const router = express.Router();
const laptopController = require('../controllers/laptops');

// Insertar nueva Laptop
router.post('/api/laptop', laptopController.createLaptop);

// Modificar Laptop por ID
router.put('/api/laptop/:id', laptopController.updateLaptop);

// Listar todas las Laptops
router.get('/api/laptop', laptopController.getLaptops);

// Listar Laptop por ID
router.get('/api/laptop/:id', laptopController.getLaptopById);

// Activar Laptop
router.put('/api/laptop/activate', laptopController.activateLaptop);

// Inactivar Laptop
router.put('/api/laptop/unactivate', laptopController.deactivateLaptop);

module.exports = router;
