const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    weight: Number,
    height: Number,
    steps: Number,
    sleepHours: Number,
    waterIntake: Number,

    stressLevel: {
      type: String,
      enum: ["none", "low", "medium", "high"],
    },

    mood: {
      type: String,
      enum: ["happy", "neutral", "stressed", "sad"],
    },

    ateJunkFood: {
      type: String,
      enum: ["yes", "no"],
    },

    ateFruitsVeggies: {
      type: String,
      enum: ["yes", "no"],
    },

    ateEnoughProtein: {
      type: String,
      enum: ["yes", "no"],
    },

    bmi: Number,
    healthValue: Number,
  },
  { timestamps: true }
);

userDetailsSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("UserDetails", userDetailsSchema);
