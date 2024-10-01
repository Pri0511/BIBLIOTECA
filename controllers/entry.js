
const Entry = require('../models/entry');


exports.createEntry = async (req, res) => {
    try {
        const entry = new Entry(req.body);
        await entry.save();
        res.status(201).send(entry);
    } catch (err) {
        res.status(400).send({ message: 'Error creando la Entrada', error: err });
    }
};

exports.getEntriesByHolder = async (req, res) => {
    try {
        const entries = await Entry.find({ holder: req.params.id }).populate('laptops');
        res.send(entries);
    } catch (err) {
        res.status(400).send({ message: 'Error obteniendo las Entradas por Holder', error: err });
    }
};

exports.getEntriesByDay = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const entries = await Entry.find({ entrytime: { $gte: today } }).populate('laptops');
        res.send(entries);
    } catch (err) {
        res.status(400).send({ message: 'Error obteniendo las Entradas del día', error: err });
    }
};

exports.getEntriesByDateRange = async (req, res) => {
    try {
        const { start, end } = req.query; 
        const entries = await Entry.find({
            entrytime: { $gte: new Date(start), $lte: new Date(end) }
        }).populate('laptop');
        res.send(entries);
    } catch (err) {
        res.status(400).send({ message: 'Error obteniendo las Entradas entre fechas', error: err });
    }
};


exports.registerCheckout = async (req, res) => {
    try {
        const entry = await Entry.findByIdAndUpdate(req.body.id, { checkout: new Date() }, { new: true });
        res.send(entry);
    } catch (err) {
        res.status(400).send({ message: 'Error registrando la salida o entrega', error: err });
    }
};
