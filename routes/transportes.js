const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");

// Obtener todos los transportes
router.get("/", (req, res) => {
    const query = "SELECT * FROM transportes";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json(results);
    });
});

// Obtener un transporte por ID
router.get("/:id", (req, res) => {
    const query = "SELECT * FROM transportes WHERE id_transporte = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Transporte no encontrado" });
        }
        res.status(200).json(result[0]);
    });
});

// Crear un nuevo transporte
router.post("/", (req, res) => {
    const { tipo, capacidad } = req.body;
    const query = "INSERT INTO transportes (tipo, capacidad) VALUES (?, ?)";
    
    connection.query(query, [tipo, capacidad], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: "Transporte creado con éxito", id_transporte: result.insertId });
    });
});

// Actualizar un transporte
router.put("/:id", (req, res) => {
    const { tipo, capacidad } = req.body;
    const query = "UPDATE transportes SET tipo = ?, capacidad = ? WHERE id_transporte = ?";
    
    connection.query(query, [tipo, capacidad, req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Transporte actualizado con éxito" });
    });
});

// Eliminar un transporte
router.delete("/:id", (req, res) => {
    const query = "DELETE FROM transportes WHERE id_transporte = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Transporte eliminado con éxito" });
    });
});

module.exports = router;

