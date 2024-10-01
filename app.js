
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const holderRoutes = require('./routes/holders');
const laptopRoutes = require('./routes/laptops');
const entryRoutes = require('./routes/entry');

const app = express();


app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/tuBaseDeDatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(holderRoutes);
app.use(laptopRoutes);
app.use(entryRoutes);


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
