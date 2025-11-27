import { useState } from "react";
import "./Healthvitals.css";

const Healthvitals = () => {
  const [formData, setFormData] = useState({
    steps: "",
    sleepHours: "",
    waterIntake: "",
    stressLevel: "",
    junkFood: "",
    veggies: "",
    protein: "",
    mood: "",
    weight: "",
    height: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Health form data:", formData);

    setFormData({
      steps: "",
      sleepHours: "",
      waterIntake: "",
      stressLevel: "",
      junkFood: "",
      veggies: "",
      protein: "",
      mood: "",
      weight: "",
      height: "",
    });
  };

  return (
    <div className="health-container">
      <h2 className="form-title">Daily Health Tracking</h2>

      <form className="health-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Your Weight"
            />
          </div>

          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="Your Height"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Steps Walked</label>
            <input
              type="number"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              placeholder="Your steps count"
            />
          </div>

          <div className="form-group">
            <label>Sleep Hours</label>
            <input
              type="number"
              name="sleepHours"
              value={formData.sleepHours}
              onChange={handleChange}
              placeholder="Total sleep hrs"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Water Intake (Ltr)</label>
            <input
              type="number"
              name="waterIntake"
              value={formData.waterIntake}
              onChange={handleChange}
              placeholder="Total water intake"
            />
          </div>

          <div className="form-group">
            <label>Ate Fruits/Veggies?</label>
            <select
              name="veggies"
              value={formData.veggies}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Ate Junk Food?</label>
            <select
              name="junkFood"
              value={formData.junkFood}
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
              name="protein"
              value={formData.protein}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Stress Level</label>
            <select
              name="stressLevel"
              value={formData.stressLevel}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="no_stress">No Stress</option>
              <option value="few_stress">Few Stress</option>
              <option value="a_lot_stress">A Lot Stress</option>
              <option value="huge_stress">Huge Stress</option>
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
        <button type="submit" className="submit-btn">
          Save Health Data
        </button>
      </form>
    </div>
  );
};

export default Healthvitals;
