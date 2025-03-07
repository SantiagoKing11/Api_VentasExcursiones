const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");

// Obtener todos los usuarios
router.get("/", (req, res) => {
    const query = "SELECT * FROM usuarios";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json(results);
    });
});

// Obtener un usuario por ID
router.get("/:id", (req, res) => {
    const query = "SELECT * FROM usuarios WHERE id_usuario = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(result[0]);
    });
});

// Crear un nuevo usuario
router.post("/", (req, res) => {
    const { nombre, apellido, email, telefono, tipo } = req.body;
    const query = "INSERT INTO usuarios (nombre, apellido, email, telefono, tipo) VALUES (?, ?, ?, ?, ?)";
    
    connection.query(query, [nombre, apellido, email, telefono, tipo], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: "Usuario creado con éxito", id_usuario: result.insertId });
    });
});

// Actualizar un usuario
router.put("/:id", (req, res) => {
    const { nombre, apellido, email, telefono, tipo } = req.body;
    const query = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, telefono = ?, tipo = ? WHERE id_usuario = ?";
    
    connection.query(query, [nombre, apellido, email, telefono, tipo, req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Usuario actualizado con éxito" });
    });
});

// Eliminar un usuario
router.delete("/:id", (req, res) => {
    const query = "DELETE FROM usuarios WHERE id_usuario = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Usuario eliminado con éxito" });
    });
});

module.exports = router;
