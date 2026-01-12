const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserDetails = require("../models/UserDetails");
const auth = require("../middleware/authMiddleware");
const mongoose = require("mongoose");
const healthScore = require("../utils/healthScore");

// Check user route
router.get("/checkuser", auth, async (req, res) => {
  try {
    console.log("REQ.USER:", req.user);

    if (!req.user || !req.user.id) {
      return res.status(401).json({ msg: "Invalid token payload" });
    }

    if (!mongoose.Types.ObjectId.isValid(req.user.id)) {
      return res.status(400).json({ msg: "Invalid user ID" });
    }

    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({
      success: true,
      msg: "User authenticated",
      user,
    });
  } catch (err) {
    console.error("CHECKUSER ERROR:", err);
    res.status(500).json({
      success: false,
      msg: "Server Error",
      error: err.message,
    });
  }
});

router.post("/health", auth, async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const userId = req.user.id;

    const {
      date,
      weight,
      height,
      steps,
      sleepHours,
      waterIntake,
      stressLevel,
      mood,
      ateJunkFood,
      ateFruitsVeggies,
      ateEnoughProtein,
    } = req.body;

    // Normalize date
    const entryDate = date || new Date().toISOString().split("T")[0];

    // Check if entry already exists for today
    const alreadyExists = await UserDetails.findOne({
      userId,
      date: entryDate,
    });

    if (alreadyExists) {
      return res.status(409).json({
        success: false,
        message: "You have already submitted health data for today",
      });
    }

    // Convert numeric values
    const weightNum = Number(weight);
    const heightNum = Number(height);
    const stepsNum = Number(steps);
    const sleepHoursNum = Number(sleepHours);
    const waterIntakeNum = Number(waterIntake);

    // BMI calculation
    const bmi =
      weightNum && heightNum
        ? Number((weightNum / (heightNum / 100) ** 2).toFixed(1))
        : null;

    // Calculate health score
    const healthValue = healthScore({
      bmi,
      steps: stepsNum,
      sleepHours: sleepHoursNum,
      waterIntake: waterIntakeNum,
      stressLevel,
      mood,
      ateJunkFood,
      ateFruitsVeggies,
      ateEnoughProtein,
    });

    //Save health data only once per day
    const healthData = await UserDetails.create({
      userId,
      date: entryDate,
      weight: weightNum,
      height: heightNum,
      steps: stepsNum,
      sleepHours: sleepHoursNum,
      waterIntake: waterIntakeNum,
      stressLevel,
      mood,
      ateJunkFood,
      ateFruitsVeggies,
      ateEnoughProtein,
      bmi,
      healthValue,
    });

    res.status(201).json({
      success: true,
      message: "Health data saved successfully",
      data: healthData,
    });
  } catch (error) {
    console.error("HEALTH ROUTE ERROR:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Health data for today already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
