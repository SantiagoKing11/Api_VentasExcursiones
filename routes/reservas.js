const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");
const authenticateToken = require("../middlewares/auth"); // Middleware JWT

// Obtener todas las reservas (PROTEGIDO)
router.get("/", authenticateToken, (req, res) => {
    const query = "SELECT * FROM reservas";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json(results);
    });
});

// Obtener una reserva por ID (PROTEGIDO)
router.get("/:id", authenticateToken, (req, res) => {
    const query = "SELECT * FROM reservas WHERE id_reserva = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        res.status(200).json(result[0]);
    });
});

// Crear una nueva reserva (PROTEGIDO)
router.post("/", authenticateToken, (req, res) => {
    const { id_usuario, id_excursion, fecha_reserva, cantidad_personas, estado } = req.body;
    const query = "INSERT INTO reservas (id_usuario, id_excursion, fecha_reserva, cantidad_personas, estado) VALUES (?, ?, ?, ?, ?)";
    
    connection.query(query, [id_usuario, id_excursion, fecha_reserva, cantidad_personas, estado], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: "Reserva creada con éxito", id_reserva: result.insertId });
    });
});

// Actualizar una reserva (PROTEGIDO)
router.put("/:id", authenticateToken, (req, res) => {
    const { fecha_reserva, cantidad_personas, estado } = req.body;
    const query = "UPDATE reservas SET fecha_reserva = ?, cantidad_personas = ?, estado = ? WHERE id_reserva = ?";
    
    connection.query(query, [fecha_reserva, cantidad_personas, estado, req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Reserva actualizada con éxito" });
    });
});

// Eliminar una reserva (PROTEGIDO)
router.delete("/:id", authenticateToken, (req, res) => {
    const query = "DELETE FROM reservas WHERE id_reserva = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Reserva eliminada con éxito" });
    });
});

module.exports = router;

