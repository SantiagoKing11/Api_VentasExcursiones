const express = require("express");
const router = express.Router();
const { connection } = require("../config/config.db");
const authenticateToken = require("../middlewares/auth"); // Middleware JWT

// Obtener todas las reservas de transporte (PROTEGIDO)
router.get("/", authenticateToken, (req, res) => {
  const query = "SELECT * FROM transporte_reserva";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.status(200).json(results);
  });
});

// Obtener una reserva de transporte por ID (id_reserva, id_transporte) (PROTEGIDO)
router.get("/:id_reserva/:id_transporte", authenticateToken, (req, res) => {
  const { id_reserva, id_transporte } = req.params;
  const query =
    "SELECT * FROM transporte_reserva WHERE id_reserva = ? AND id_transporte = ?";
  connection.query(query, [id_reserva, id_transporte], (error, result) => {
    if (error) {
      return res.status(500).json({ error });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Reserva de transporte no encontrada" });
    }
    res.status(200).json(result[0]);
  });
});

// Crear una nueva reserva de transporte (PROTEGIDO)
router.post("/", authenticateToken, (req, res) => {
  const { id_reserva, id_transporte } = req.body;
  const query =
    "INSERT INTO transporte_reserva (id_reserva, id_transporte) VALUES (?, ?)";
  connection.query(query, [id_reserva, id_transporte], (error, result) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.status(201).json({
      message: "Reserva de transporte creada con éxito",
      id_reserva,
      id_transporte,
    });
  });
});

// Actualizar una reserva de transporte (PROTEGIDO)
router.put("/:id_reserva/:id_transporte", authenticateToken, (req, res) => {
  const { id_reserva, id_transporte } = req.params;
  const { new_id_reserva, new_id_transporte } = req.body;

  const query =
    "UPDATE transporte_reserva SET id_reserva = ?, id_transporte = ? WHERE id_reserva = ? AND id_transporte = ?";
  connection.query(
    query,
    [new_id_reserva, new_id_transporte, id_reserva, id_transporte],
    (error, result) => {
      if (error) {
        return res.status(500).json({ error });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Reserva de transporte no encontrada" });
      }
      res.status(200).json({ message: "Reserva de transporte actualizada con éxito" });
    }
  );
});

// Eliminar una reserva de transporte (PROTEGIDO)
router.delete("/:id_reserva/:id_transporte", authenticateToken, (req, res) => {
  const { id_reserva, id_transporte } = req.params;
  const query =
    "DELETE FROM transporte_reserva WHERE id_reserva = ? AND id_transporte = ?";
  connection.query(query, [id_reserva, id_transporte], (error, result) => {
    if (error) {
      return res.status(500).json({ error });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Reserva de transporte no encontrada" });
    }
    res.status(200).json({ message: "Reserva de transporte eliminada con éxito" });
  });
});

module.exports = router;
