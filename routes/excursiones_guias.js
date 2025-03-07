const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");
const authenticateToken = require("../middlewares/auth"); // Middleware JWT

// Obtener todas las relaciones entre excursiones y guías (PROTEGIDO)
router.get("/", authenticateToken, (req, res) => {
    const query = "SELECT * FROM excursion_guias";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json(results);
    });
});

// Obtener una relación específica por ID de excursión y guía (PROTEGIDO)
router.get("/:id_excursion/:id_guia", authenticateToken, (req, res) => {
    const query = "SELECT * FROM excursion_guias WHERE id_excursion = ? AND id_guia = ?";
    connection.query(query, [req.params.id_excursion, req.params.id_guia], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Relación no encontrada" });
        }
        res.status(200).json(result[0]);
    });
});

// Asignar un guía a una excursión (PROTEGIDO)
router.post("/", authenticateToken, (req, res) => {
    const { id_excursion, id_guia } = req.body;
    const query = "INSERT INTO excursion_guias (id_excursion, id_guia) VALUES (?, ?)";
    connection.query(query, [id_excursion, id_guia], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: "Guía asignado a excursión con éxito", id_relacion: result.insertId });
    });
});

// Actualizar una relación entre excursión y guía (PROTEGIDO)
router.put("/:id_excursion/:id_guia", authenticateToken, (req, res) => {
    const { id_excursion, id_guia } = req.body;
    const query = "UPDATE excursion_guias SET id_excursion = ?, id_guia = ? WHERE id_excursion = ? AND id_guia = ?";
    connection.query(query, [id_excursion, id_guia, req.params.id_excursion, req.params.id_guia], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Relación actualizada con éxito" });
    });
});

// Eliminar una relación entre excursión y guía (PROTEGIDO)
router.delete("/:id_excursion/:id_guia", authenticateToken, (req, res) => {
    const query = "DELETE FROM excursion_guias WHERE id_excursion = ? AND id_guia = ?";
    connection.query(query, [req.params.id_excursion, req.params.id_guia], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Relación eliminada con éxito" });
    });
});

module.exports = router;
