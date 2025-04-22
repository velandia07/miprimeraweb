// models/Torta.js
const mongoose = require('mongoose');

// Definir el esquema para las tortas
const tortaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,  // El nombre es obligatorio
    trim: true       // Elimina espacios al inicio o final del nombre
  },
  descripcion: {
    type: String,
    required: true,  // La descripción es obligatoria
    trim: true
  },
  precio: {
    type: Number,
    required: true,  // El precio es obligatorio
  },
  imagen: {
    type: String,
    required: false  // La URL de la imagen NO es obligatoria
  }
});

// Crear el modelo de la torta basado en el esquema
const Torta = mongoose.model('Torta', tortaSchema);

module.exports = Torta;