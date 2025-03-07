const express = require('express');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso permitido', user: req.user });
});

module.exports = router;
