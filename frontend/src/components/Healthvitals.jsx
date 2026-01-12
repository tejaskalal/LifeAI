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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
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

      // ONE ENTRY PER DAY HANDLING
      if (response.status === 409) {
        alert("You have already submitted your health data for today");
        navigate("/dashboard");
        return;
      }

      if (!response.ok) {
        alert(data.message || "Failed to save health data");
        return;
      }

      alert("Health data saved successfully");

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

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Error saving health data:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="health-container">
      <h2 className="form-title">Daily Health Tracking</h2>

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
