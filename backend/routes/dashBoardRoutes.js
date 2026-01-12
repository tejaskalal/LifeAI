const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");
const UserDetails = require("../models/UserDetails");

router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("name");

    // Latest health data
    const latest = await UserDetails.findOne({ userId }).sort({
      createdAt: -1,
    });

    if (!latest) {
      return res.status(200).json({
        name: user.name,
        message: "No user details found",
        healthTrend: [],
      });
    }

    // Last 7 health records
    const trendDocs = await UserDetails.find({ userId })
      .sort({ createdAt: -1 })
      .limit(7)
      .select("date healthValue");

    const healthTrend = trendDocs.reverse().map((item) => ({
      date: item.date,
      value: item.healthValue,
    }));

    // Single response for dashboard + graph
    res.status(200).json({
      name: user.name,

      // cards
      weight: latest.weight,
      height: latest.height,
      bmi: latest.bmi,
      healthValue: latest.healthValue,
      steps: latest.steps,
      sleep: latest.sleepHours,
      waterIntake: latest.waterIntake,

      // graph
      healthTrend,
    });
  } catch (err) {
    console.error("Dashboard error:", err);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
