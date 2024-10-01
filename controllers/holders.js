// controllers/holderController.js
const Holder = require('../models/holders');

// Insertar nuevo Holder
exports.createHolder = async (req, res) => {
    try {
        const holder = new Holder(req.body);
        await holder.save();
        res.status(201).send(holder);
    } catch (err) {
        res.status(400).send({ message: 'Error creando el Holder', error: err });
    }
};

// Modificar Holder por ID
exports.updateHolder = async (req, res) => {
    try {
        const holder = await Holder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(holder);
    } catch (err) {
        res.status(400).send({ message: 'Error actualizando el Holder', error: err });
    }
};

// Listar todos los Holders
exports.getHolders = async (req, res) => {
    try {
        const holders = await Holder.find();
        res.send(holders);
    } catch (err) {
        res.status(400).send({ message: 'Error listando Holders', error: err });
    }
};

// Listar Holder por ID
exports.getHolderById = async (req, res) => {
    try {
        const holder = await Holder.findById(req.params.id);
        res.send(holder);
    } catch (err) {
        res.status(400).send({ message: 'Error obteniendo el Holder', error: err });
    }
};

// Activar Holder
exports.activateHolder = async (req, res) => {
    try {
        const holder = await Holder.findByIdAndUpdate(req.body.id, { state: '1' }, { new: true });
        res.send(holder);
    } catch (err) {
        res.status(400).send({ message: 'Error activando el Holder', error: err });
    }
};

// Inactivar Holder
exports.deactivateHolder = async (req, res) => {
    try {
        const holder = await Holder.findByIdAndUpdate(req.body.id, { state: '0' }, { new: true });
        res.send(holder);
    } catch (err) {
        res.status(400).send({ message: 'Error desactivando el Holder', error: err });
    }
};
