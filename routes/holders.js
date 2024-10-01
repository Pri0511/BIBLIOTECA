
const express = require('express');
const router = express.Router();
const holderController = require('../controllers/holders');


router.post('/api/holder', holderController.createHolder);


router.put('/api/holder/:id', holderController.updateHolder);

router.get('/api/holder', holderController.getHolders);


router.get('/api/holder/:id', holderController.getHolderById);


router.put('/api/holder/activate', holderController.activateHolder);

router.put('/api/holder/unactivate', holderController.deactivateHolder);

module.exports = router;
