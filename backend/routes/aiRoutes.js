const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const { predictHealth } = require("../controllers/ai.controller");

router.post("/predict", auth, predictHealth);

module.exports = router;
