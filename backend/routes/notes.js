const express = require("express");

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ thios: 34 });
});

module.exports = router;
