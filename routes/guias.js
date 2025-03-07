const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");
const authenticateToken = require("../middlewares/auth"); // Middleware JWT

// Obtener todos los guías (PROTEGIDO)
router.get("/", authenticateToken, (req, res) => {
    const query = "SELECT * FROM guias";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json(results);
    });
});

// Obtener un guía por ID (PROTEGIDO)
router.get("/:id", authenticateToken, (req, res) => {
    const query = "SELECT * FROM guias WHERE id_guia = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Guía no encontrado" });
        }
        res.status(200).json(result[0]);
    });
});

// Crear un nuevo guía (PROTEGIDO)
router.post("/", authenticateToken, (req, res) => {
    const { nombre, apellido, telefono, email, especialidad } = req.body;
    const query = "INSERT INTO guias (nombre, apellido, telefono, email, especialidad) VALUES (?, ?, ?, ?, ?)";
    
    connection.query(query, [nombre, apellido, telefono, email, especialidad], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: "Guía creado con éxito", id_guia: result.insertId });
    });
});

// Actualizar un guía (PROTEGIDO)
router.put("/:id", authenticateToken, (req, res) => {
    const { nombre, apellido, telefono, email, especialidad } = req.body;
    const query = "UPDATE guias SET nombre = ?, apellido = ?, telefono = ?, email = ?, especialidad = ? WHERE id_guia = ?";
    
    connection.query(query, [nombre, apellido, telefono, email, especialidad, req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Guía actualizado con éxito" });
    });
});

// Eliminar un guía (PROTEGIDO)
router.delete("/:id", authenticateToken, (req, res) => {
    const query = "DELETE FROM guias WHERE id_guia = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Guía eliminado con éxito" });
    });
});

module.exports = router;
