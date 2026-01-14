const axios = require("axios");

const chatWithAI = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query || query.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Query is required",
      });
    }

    const systemPrompt = `
You are a general health and wellness assistant.
Answer only general health questions.
Do not give medical diagnosis or prescribe medicine.
Suggest consulting professionals when necessary.
`;

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "phi",
      prompt: systemPrompt + "\nUser: " + query,
      stream: false,
    });

    res.status(200).json({
      success: true,
      answer: response.data.response,
    });
  } catch (error) {
    console.error("Chat AI Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Chat AI service unavailable",
    });
  }
};

module.exports = { chatWithAI };
