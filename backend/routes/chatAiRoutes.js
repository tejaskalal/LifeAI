const express = require("express");
const { chatWithAI } = require("../controllers/chatAI.controller");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/ask", auth, chatWithAI);

module.exports = router;
