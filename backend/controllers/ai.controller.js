const axios = require("axios");
const HealthData = require("../models/UserDetails");

// Manual ai fetch
const predictHealth = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch latest health data
    const latestHealth = await HealthData.findOne({ userId }).sort({
      createdAt: -1,
    });

    if (!latestHealth) {
      return res.status(404).json({
        success: false,
        message: "No health data found",
      });
    }

    // Call AI service
    const aiResponse = await axios.post("http://localhost:5000/predict", {
      input: {
        sleepHours: latestHealth.sleepHours,
        waterIntake: latestHealth.waterIntake,
        ateJunkFood: latestHealth.ateJunkFood,
        ateFruitsVeggies: latestHealth.ateFruitsVeggies,
        ateEnoughProtein: latestHealth.ateEnoughProtein,
        stressLevel: latestHealth.stressLevel,
        mood: latestHealth.mood,
        steps: latestHealth.steps,
        bmi: latestHealth.bmi,
      },
    });

    return res.status(200).json({
      success: true,
      healthScore: latestHealth.healthValue,
      aiInsights: aiResponse.data,
    });
  } catch (err) {
    console.error("AI PREDICT ERROR:", err.message);

    return res.status(500).json({
      success: false,
      message: "AI service unavailable",
    });
  }
};

module.exports = { predictHealth };
