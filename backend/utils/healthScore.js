function calculateHealthScore(userData) {
  let score = 0;

  const {
    bmi,
    steps,
    sleepHours,
    waterIntake,
    stressLevel,
    mood,
    ateJunkFood,
    ateFruitsVeggies,
    ateEnoughProtein,
  } = userData;

  // BMI (max 20)
  if (bmi >= 18.5 && bmi <= 24.9) score += 20;
  else if (bmi >= 25 && bmi <= 29.9) score += 10;
  else score += 5;

  // Steps (max 20)
  if (steps >= 10000) score += 20;
  else if (steps >= 5000) score += 10;
  else score += 5;

  // Sleep (max 15)
  if (sleepHours >= 7 && sleepHours <= 8) score += 15;
  else if (sleepHours >= 5) score += 10;
  else score += 5;

  // Water (max 10)
  if (waterIntake >= 2 && waterIntake <= 3) score += 10;
  else score += 5;

  // Stress (max 10)
  switch (stressLevel) {
    case "none":
      score += 10;
      break;
    case "low":
      score += 8;
      break;
    case "medium":
      score += 5;
      break;
    case "high":
      score += 2;
      break;
  }

  // Mood (max 10)
  switch (mood) {
    case "happy":
      score += 10;
      break;
    case "neutral":
      score += 7;
      break;
    case "stressed":
      score += 4;
      break;
    case "sad":
      score += 2;
      break;
  }

  // Diet (max 15)
  if (ateFruitsVeggies === "yes") score += 5;
  if (ateEnoughProtein === "yes") score += 5;
  if (ateJunkFood === "no") score += 5;

  // Ensure it never exceeds 100
  if (score > 100) score = 100;

  return score; // 0 - 100
}

module.exports = calculateHealthScore;
