const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");
const authenticateToken = require("../middlewares/auth"); // Middleware JWT

// Obtener todas las excursiones (PROTEGIDO)
router.get("/", authenticateToken, (req, res) => {
    const query = "SELECT * FROM excursiones";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json(results);
    });
});

// Obtener una excursión por ID (PROTEGIDO)
router.get("/:id", authenticateToken, (req, res) => {
    const query = "SELECT * FROM excursiones WHERE id_excursion = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Excursión no encontrada" });
        }
        res.status(200).json(result[0]);
    });
});

// Crear una nueva excursión (PROTEGIDO)
router.post("/", authenticateToken, (req, res) => {
    const { nombre, descripcion, precio, duracion } = req.body;
    const query = "INSERT INTO excursiones (nombre, descripcion, precio, duracion) VALUES (?, ?, ?, ?)";
    
    connection.query(query, [nombre, descripcion, precio, duracion], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: "Excursión creada con éxito", id_excursion: result.insertId });
    });
});

// Actualizar una excursión (PROTEGIDO)
router.put("/:id", authenticateToken, (req, res) => {
    const { nombre, descripcion, precio, duracion } = req.body;
    const query = "UPDATE excursiones SET nombre = ?, descripcion = ?, precio = ?, duracion = ? WHERE id_excursion = ?";
    
    connection.query(query, [nombre, descripcion, precio, duracion, req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Excursión actualizada con éxito" });
    });
});

// Eliminar una excursión (PROTEGIDO)
router.delete("/:id", authenticateToken, (req, res) => {
    const query = "DELETE FROM excursiones WHERE id_excursion = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Excursión eliminada con éxito" });
    });
});

module.exports = router;
