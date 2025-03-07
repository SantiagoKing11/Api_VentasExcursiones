const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");
const authenticateToken = require("../middlewares/auth"); // Importar el middleware

// Obtener todos los clientes (PROTEGIDO)
router.get("/", authenticateToken, (req, res) => {
    const query = "SELECT * FROM clientes";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json(results);
    });
});

// Obtener un cliente por ID (PROTEGIDO)
router.get("/:id", authenticateToken, (req, res) => {
    const query = "SELECT * FROM clientes WHERE id_cliente = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        res.status(200).json(result[0]);
    });
});

// Crear un nuevo cliente (PROTEGIDO)
router.post("/", authenticateToken, (req, res) => {
    const { id_usuario, nacionalidad, fecha_registro } = req.body;
    const query = "INSERT INTO clientes (id_usuario, nacionalidad, fecha_registro) VALUES (?, ?, ?)";
    connection.query(query, [id_usuario, nacionalidad, fecha_registro], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: "Cliente creado con éxito", id_cliente: result.insertId });
    });
});

// Actualizar un cliente (PROTEGIDO)
router.put("/:id", authenticateToken, (req, res) => {
    const { id_usuario, nacionalidad, fecha_registro } = req.body;
    const query = "UPDATE clientes SET id_usuario = ?, nacionalidad = ?, fecha_registro = ? WHERE id_cliente = ?";
    connection.query(query, [id_usuario, nacionalidad, fecha_registro, req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Cliente actualizado con éxito" });
    });
});

// Eliminar un cliente (PROTEGIDO)
router.delete("/:id", authenticateToken, (req, res) => {
    const query = "DELETE FROM clientes WHERE id_cliente = ?";
    connection.query(query, [req.params.id], (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(200).json({ message: "Cliente eliminado con éxito" });
    });
});

module.exports = router;
