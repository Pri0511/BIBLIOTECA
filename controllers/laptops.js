
const Laptop = require('../models/laptops');


exports.createLaptop = async (req, res) => {
    try {
        const laptop = new Laptop(req.body);
        await laptop.save();
        res.status(201).send(laptop);
    } catch (err) {
        res.status(400).send({ message: 'Error creando la Laptop', error: err });
    }
};


exports.updateLaptop = async (req, res) => {
    try {
        const laptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(laptop);
    } catch (err) {
        res.status(400).send({ message: 'Error actualizando la Laptop', error: err });
    }
};


exports.getLaptops = async (req, res) => {
    try {
        const laptops = await Laptop.find().populate('holders');
        res.send(laptops);
    } catch (err) {
        res.status(400).send({ message: 'Error listando las Laptops', error: err });
    }
};


exports.getLaptopById = async (req, res) => {
    try {
        const laptop = await Laptop.findById(req.params.id).populate('holders');
        res.send(laptop);
    } catch (err) {
        res.status(400).send({ message: 'Error obteniendo la Laptop', error: err });
    }
};


exports.activateLaptop = async (req, res) => {
    try {
        const laptop = await Laptop.findByIdAndUpdate(req.body.id, { state: '1' }, { new: true });
        res.send(laptop);
    } catch (err) {
        res.status(400).send({ message: 'Error activando la Laptop', error: err });
    }
};


exports.deactivateLaptop = async (req, res) => {
    try {
        const laptop = await Laptop.findByIdAndUpdate(req.body.id, { state: '0' }, { new: true });
        res.send(laptop);
    } catch (err) {
        res.status(400).send({ message: 'Error desactivando la Laptop', error: err });
    }
};
