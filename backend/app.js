// Importar módulos necesarios
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const Torta = require('./models/Torta'); // Importar modelo Torta

// Configurar dotenv para usar variables de entorno
dotenv.config();

// Crear instancia de Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Middleware para procesar datos JSON

// Sirve la carpeta "frontend" desde el nivel superior
app.use('/frontend', express.static(path.join(__dirname, '../frontend')));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error);
  });

// Rutas para usuarios (si las tienes)
app.use('/api/usuarios', require('./routes/usuarios'));

// RUTA PARA CREAR UNA TORTA (POST)
app.post('/api/tortas', async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen } = req.body;

    const nuevaTorta = new Torta({
      nombre,
      descripcion,
      precio,
      imagen,
    });

    await nuevaTorta.save(); // Guardar en la base de datos
    res.status(201).json(nuevaTorta); // Respuesta exitosa con la nueva torta
  } catch (error) {
    console.error('❌ Error al registrar torta:', error);
    res.status(500).send('Error al registrar torta');
  }
});

// RUTA PARA OBTENER TODAS LAS TORTAS (GET)
app.get('/api/tortas', async (req, res) => {
  try {
    const tortas = await Torta.find(); // Obtener todas las tortas desde MongoDB
    res.status(200).json(tortas); // Respuesta exitosa con las tortas encontradas
  } catch (error) {
    console.error('❌ Error al obtener tortas:', error);
    res.status(500).send('Error al obtener tortas');
  }
});

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});