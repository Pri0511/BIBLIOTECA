
const express = require('express');
const router = express.Router();
const laptopController = require('../controllers/laptops');


router.post('/api/laptop', laptopController.createLaptop);


router.put('/api/laptop/:id', laptopController.updateLaptop);


router.get('/api/laptop', laptopController.getLaptops);


router.get('/api/laptop/:id', laptopController.getLaptopById);


router.put('/api/laptop/activate', laptopController.activateLaptop);


router.put('/api/laptop/unactivate', laptopController.deactivateLaptop);

module.exports = router;
