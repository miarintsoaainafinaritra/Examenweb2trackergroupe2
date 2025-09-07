const express = require('express');
const pool = require('../db');
const authenticateToken = require('../middleware/auth');
const router = express.Router();


router.get('/', authenticateToken, async (req, res) => {
  const userId = req.user.userId;
  const result = await pool.query('SELECT * FROM expenses WHERE user_id = $1', [userId]);
  res.json(result.rows);
});

router.post('/', authenticateToken, async (req, res) => {
  const userId = req.user.userId;
  const { amount, category, date, description } = req.body;
  const result = await pool.query(
    'INSERT INTO expenses (user_id, amount, category, date, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [userId, amount, category, date, description]
  );
  res.json(result.rows[0]);
});

module.exports = router;
