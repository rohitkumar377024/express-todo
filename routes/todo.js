const router = require('express').Router();

router.get('/', async (req, res) => {
  res.json({ status: 'success', message: 'Test - Root Todo Route' });
});

module.exports = router;
