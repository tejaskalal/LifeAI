import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Healthvitals.css";

const Healthvitals = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    weight: "",
    height: "",
    steps: "",
    sleepHours: "",
    waterIntake: "",
    stressLevel: "",
    mood: "",
    ateJunkFood: "",
    ateFruitsVeggies: "",
    ateEnoughProtein: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ FRONTEND VALIDATION
  const isFormEmpty = () => {
    return Object.entries(formData).some(([key, value]) => {
      if (key === "date") return false;
      return value === "" || value === null;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // 🔴 STOP SUBMIT IF EMPTY
    if (isFormEmpty()) {
      setError("All fields are required");
      setTimeout(() => setError(""), 1500);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3000/api/user/health", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 409) {
        setError("You have already submitted your health data for today");
        setTimeout(() => {
          setError("");
          navigate("/dashboard");
        }, 1500);
        return;
      }

      if (!response.ok) {
        setError(data.message || "Failed to save health data");
        setTimeout(() => setError(""), 1500);
        return;
      }

      // ✅ SUCCESS
      setSuccess("Health data saved successfully!");
      setTimeout(() => setSuccess(""), 1500);

      setFormData({
        date: new Date().toISOString().split("T")[0],
        weight: "",
        height: "",
        steps: "",
        sleepHours: "",
        waterIntake: "",
        stressLevel: "",
        mood: "",
        ateJunkFood: "",
        ateFruitsVeggies: "",
        ateEnoughProtein: "",
      });

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 1500);
    } catch (err) {
      console.error("Error saving health data:", err);
      setError("Server error. Please try again later.");
      setTimeout(() => setError(""), 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="health-container">
      <h2 className="form-title">Daily Health Tracking</h2>

      {error && <p className="msg error">{error}</p>}
      {success && <p className="msg success">{success}</p>}

      <form className="health-form" onSubmit={handleSubmit}>
        {/* Weight & Height */}
        <div className="form-row">
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Steps & Sleep */}
        <div className="form-row">
          <div className="form-group">
            <label>Steps Walked</label>
            <input
              type="number"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Sleep Hours</label>
            <input
              type="number"
              name="sleepHours"
              value={formData.sleepHours}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Water & Veggies */}
        <div className="form-row">
          <div className="form-group">
            <label>Water Intake (Litres)</label>
            <input
              type="number"
              name="waterIntake"
              value={formData.waterIntake}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Ate Fruits / Veggies?</label>
            <select
              name="ateFruitsVeggies"
              value={formData.ateFruitsVeggies}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {/* Junk & Protein */}
        <div className="form-row">
          <div className="form-group">
            <label>Ate Junk Food?</label>
            <select
              name="ateJunkFood"
              value={formData.ateJunkFood}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div className="form-group">
            <label>Ate Enough Protein?</label>
            <select
              name="ateEnoughProtein"
              value={formData.ateEnoughProtein}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {/* Stress & Mood */}
        <div className="form-row">
          <div className="form-group">
            <label>Stress Level</label>
            <select
              name="stressLevel"
              value={formData.stressLevel}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="none">None</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Mood</label>
            <select name="mood" value={formData.mood} onChange={handleChange}>
              <option value="">Select</option>
              <option value="happy">Happy</option>
              <option value="neutral">Neutral</option>
              <option value="stressed">Stressed</option>
              <option value="sad">Sad</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Saving..." : "Save Health Data"}
        </button>
      </form>
    </div>
  );
};

export default Healthvitals;
