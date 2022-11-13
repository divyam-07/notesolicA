const express = require("express");

const router = express.Router();
router.post("/signup", (req, res) => {
  res.json(req.body);
});

module.exports = router;
