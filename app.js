// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importar las rutas
const holderRoutes = require('./routes/holders');
const laptopRoutes = require('./routes/laptops');
const entryRoutes = require('./routes/entry');

const app = express();

// Middleware
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/tuBaseDeDatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Usar las rutas
app.use(holderRoutes);
app.use(laptopRoutes);
app.use(entryRoutes);

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
