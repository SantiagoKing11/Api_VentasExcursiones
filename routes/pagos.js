const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");
const authenticateToken = require("../middlewares/auth"); // Middleware JWT

// Obtener todos los pagos (PROTEGIDO)
router.get("/", authenticateToken, (req, res) => {
    const query = "SELECT * FROM pagos";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json(results);
    });
});

// Obtener un pago por ID (PROTEGIDO)
router.get("/:id", authenticateToken, (req, res) => {
    const query = "SELECT * FROM pagos WHERE id_pago = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Pago no encontrado" });
        }
        res.status(200).json(result[0]);
    });
});

// Crear un nuevo pago (PROTEGIDO)
router.post("/", authenticateToken, (req, res) => {
    const { id_reserva, monto, fecha_pago, metodo_pago } = req.body;
    const query = "INSERT INTO pagos (id_reserva, monto, fecha_pago, metodo_pago) VALUES (?, ?, ?, ?)";
    
    connection.query(query, [id_reserva, monto, fecha_pago, metodo_pago], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: "Pago creado con éxito", id_pago: result.insertId });
    });
});

// Actualizar un pago (PROTEGIDO)
router.put("/:id", authenticateToken, (req, res) => {
    const { id_reserva, monto, fecha_pago, metodo_pago } = req.body;
    const query = "UPDATE pagos SET id_reserva = ?, monto = ?, fecha_pago = ?, metodo_pago = ? WHERE id_pago = ?";
    
    connection.query(query, [id_reserva, monto, fecha_pago, metodo_pago, req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Pago actualizado con éxito" });
    });
});

// Eliminar un pago (PROTEGIDO)
router.delete("/:id", authenticateToken, (req, res) => {
    const query = "DELETE FROM pagos WHERE id_pago = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Pago eliminado con éxito" });
    });
});

module.exports = router;
