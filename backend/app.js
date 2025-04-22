// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Torta = require('./models/Torta'); // Importar el modelo Torta

// Configurar dotenv para usar variables de entorno
dotenv.config();

// Crear instancia de Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para recibir datos en formato JSON

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Conexión exitosa a MongoDB');
})
.catch((error) => {
  console.error('❌ Error al conectar a MongoDB:', error);
});

// RUTA PARA CREAR UNA TORTA
app.post('/api/tortas', async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen } = req.body; // Extraer datos del cuerpo de la solicitud

    // Crear una nueva torta con los datos enviados
    const nuevaTorta = new Torta({
      nombre,
      descripcion,
      precio,
      imagen
    });

    // Guardar la torta en la base de datos
    await nuevaTorta.save();

    // Responder con el objeto de la torta creada
    res.status(201).json(nuevaTorta);
  } catch (error) {
    console.error('❌ Error al crear la torta:', error);
    res.status(500).send('Error al crear la torta');
  }
});

// RUTA PARA OBTENER TODAS LAS TORTAS
app.get('/api/tortas', async (req, res) => {
  try {
    const tortas = await Torta.find(); // Obtener todas las tortas desde la base de datos
    res.status(200).json(tortas); // Responder con las tortas encontradas
  } catch (error) {
    console.error('❌ Error al obtener las tortas:', error);
    res.status(500).send('Error al obtener las tortas');
  }
});

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});