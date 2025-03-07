const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");
const authenticateToken = require("../middlewares/auth"); // Middleware JWT

// Obtener todas las reseñas (PROTEGIDO)
router.get("/", authenticateToken, (req, res) => {
    const query = "SELECT * FROM reseñas";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json(results);
    });
});

// Obtener una reseña por ID (PROTEGIDO)
router.get("/:id", authenticateToken, (req, res) => {
    const query = "SELECT * FROM reseñas WHERE id_reseña = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Reseña no encontrada" });
        }
        res.status(200).json(result[0]);
    });
});

// Crear una nueva reseña (PROTEGIDO)
router.post("/", authenticateToken, (req, res) => {
    const { id_usuario, id_excursion, calificacion, comentario, fecha_reseña } = req.body;
    const query = "INSERT INTO reseñas (id_usuario, id_excursion, calificacion, comentario, fecha_reseña) VALUES (?, ?, ?, ?, ?)";
    
    connection.query(query, [id_usuario, id_excursion, calificacion, comentario, fecha_reseña], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: "Reseña creada con éxito", id_reseña: result.insertId });
    });
});

// Actualizar una reseña (PROTEGIDO)
router.put("/:id", authenticateToken, (req, res) => {
    const { id_usuario, id_excursion, calificacion, comentario, fecha_reseña } = req.body;
    const query = "UPDATE reseñas SET id_usuario = ?, id_excursion = ?, calificacion = ?, comentario = ?, fecha_reseña = ? WHERE id_reseña = ?";
    
    connection.query(query, [id_usuario, id_excursion, calificacion, comentario, fecha_reseña, req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Reseña actualizada con éxito" });
    });
});

// Eliminar una reseña (PROTEGIDO)
router.delete("/:id", authenticateToken, (req, res) => {
    const query = "DELETE FROM reseñas WHERE id_reseña = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Reseña eliminada con éxito" });
    });
});

module.exports = router;
