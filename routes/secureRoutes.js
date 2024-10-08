const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

// Protected route
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}!`, user: req.user });
});

module.exports = router;
