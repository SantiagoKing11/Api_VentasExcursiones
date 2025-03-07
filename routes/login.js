const express = require('express');
const jwt = require('jsonwebtoken');
const { connection } = require('../config/config.db');
require('dotenv').config();

const router = express.Router();

router.post('/', (req, res) => {
    const { nombre, apellido } = req.body;

    if (!nombre || !apellido) {
        return res.status(400).json({ error: 'Se requieren nombre y apellido' });
    }

    const query = 'SELECT * FROM usuarios WHERE nombre = ? AND apellido = ?';

    connection.query(query, [nombre, apellido], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error en el servidor', details: error });
        }

        if (results.length === 0) {
            return res.status(403).json({ error: 'Credenciales incorrectas' });
        }

        const user = { id: results[0].id_usuario, nombre: results[0].nombre };
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    });
});

module.exports = router;
