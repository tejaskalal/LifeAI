from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load model & features ONCE
model = joblib.load("random_forest_model.pkl")
features = joblib.load("features.pkl")

print("MODEL FEATURES:", features)

# Feature mapping (model feature -> DB field)
FEATURE_MAPPING = {
    "sleep": "sleepHours",
    "water": "waterIntake",
    "junk_food": "ateJunkFood",
    "fruits_veggies": "ateFruitsVeggies",
    "protein": "ateEnoughProtein",
    "stress": "stressLevel",
    "mood": "mood",
    "steps": "steps",
    "bmi": "bmi"
}

# Encoding maps
STRESS_MAP = {
    "none": 0,
    "low": 1,
    "medium": 2,
    "high": 3
}

MOOD_MAP = {
    "happy": 0,
    "neutral": 1,
    "stressed": 2,
    "sad": 3
}


def generate_insights(input_dict):
    strengths = []
    concerns = []
    suggestions = {}

    if input_dict["sleepHours"] < 6:
        concerns.append("Low sleep duration")
        suggestions["sleep"] = (
            "Aim for 7–8 hours of sleep. "
            "Maintain a consistent bedtime and reduce screen usage at night."
        )
    else:
        strengths.append("Good sleep routine")

    if input_dict.get("steps", 0) >= 8000:
        strengths.append("Physically active lifestyle")
    else:
        concerns.append("Low physical activity")
        suggestions["activity"] = (
            "Try walking at least 30 minutes daily to improve activity levels."
        )

    if input_dict["waterIntake"] >= 3:
        strengths.append("Good hydration level")
    else:
        concerns.append("Low water intake")
        suggestions["hydration"] = (
            "Increase daily water intake to at least 3 liters."
        )

    if 18.5 <= input_dict.get("bmi", 0) <= 24.9:
        strengths.append("Healthy BMI")
    else:
        concerns.append("Unhealthy BMI range")
        suggestions["weight"] = (
            "Focus on balanced nutrition and regular exercise to improve BMI."
        )

    if input_dict["stressLevel"] == "low":
        strengths.append("Well managed stress level")
    else:
        concerns.append("Elevated stress level")
        suggestions["mental_health"] = (
            "Practice relaxation techniques like deep breathing or meditation."
        )

    return strengths, concerns, suggestions


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "LifeAI Flask service running"})


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    print(">>> Flask AI RECEIVED REQUEST:", data)

    if not data or "input" not in data:
        return jsonify({"error": "Input missing"}), 400

    input_dict = data["input"]
    mapped_input = {}
    missing = []

    for feature in features:
        db_key = FEATURE_MAPPING.get(feature)

        if not db_key or db_key not in input_dict:
            missing.append(feature)
            continue

        value = input_dict[db_key]

        # Encode categorical features
        if feature == "stress":
            mapped_input[feature] = STRESS_MAP.get(str(value).lower())
        elif feature == "mood":
            mapped_input[feature] = MOOD_MAP.get(str(value).lower())
        elif isinstance(value, str):
            value = value.lower()
            if value == "yes":
                mapped_input[feature] = 1
            elif value == "no":
                mapped_input[feature] = 0
            else:
                return jsonify({
                    "error": f"Invalid categorical value for '{feature}': {value}"
                }), 400
        else:
            try:
                mapped_input[feature] = float(value)
            except:
                return jsonify({
                    "error": f"Invalid numeric value for '{feature}': {value}"
                }), 400

        if mapped_input[feature] is None:
            return jsonify({
                "error": f"Invalid value for '{feature}': {value}"
            }), 400

    if missing:
        return jsonify({"error": f"Missing features: {missing}"}), 400

    # DataFrame-based inference (NO WARNING, STABLE)
    input_df = pd.DataFrame([mapped_input], columns=features)

    prediction = int(model.predict(input_df)[0])
    confidence = round(float(model.predict_proba(input_df).max()), 2)

    strengths, concerns, suggestions = generate_insights(input_dict)

    overall_status = "Good Health"
    if len(concerns) >= 2:
        overall_status = "Health Needs Improvement"

    return jsonify({
        "prediction": prediction,
        "confidence": confidence,
        "overallStatus": overall_status,
        "strengths": strengths,
        "concerns": concerns,
        "suggestions": suggestions
    })


if __name__ == "__main__":
    app.run(port=5000)
