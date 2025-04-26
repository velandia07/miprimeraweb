// backend/routes/usuarios.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model'); // Asegúrate de que el nombre del archivo sea correcto

// Registro de usuario
router.post('/registro', async (req, res) => {
  try {
    const { nombre, identificacion, usuario, password } = req.body;

    const nuevoUsuario = new Usuario({ nombre, identificacion, usuario, password });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('❌ Error al registrar:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});

// Login de usuario
router.post('/login', async (req, res) => {
  try {
    const { usuario, password } = req.body;

    const usuarioEncontrado = await Usuario.findOne({ usuario });

    if (!usuarioEncontrado || usuarioEncontrado.password !== password) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    res.status(200).json({ mensaje: 'Login exitoso' });
  } catch (error) {
    console.error('❌ Error en login:', error);
    res.status(500).json({ mensaje: 'Error al hacer login' });
  }
});

module.exports = router;