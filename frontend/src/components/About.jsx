import "./About.css";
import {
  FaBrain,
  FaHeartbeat,
  FaUserShield,
  FaLaptopCode,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">
        About <span>LifeAI</span>
      </h2>

      <p className="about-description">
        LifeAI is an intelligent health companion built to help users track,
        improve, and understand their daily wellness. From monitoring vitals to
        providing insights, LifeAI empowers people to take control of their
        health through smart technology and clean UI.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <FaBrain className="feature-icon" />
          <h3 className="feature-title">Smart Health Insights</h3>
          <p className="feature-text">
            AI-driven suggestions to improve your daily wellness routine.
          </p>
        </div>

        <div className="feature-card">
          <FaHeartbeat className="feature-icon" />
          <h3 className="feature-title">Vitals Tracking</h3>
          <p className="feature-text">
            Easily log steps, sleep, water, mood, and more.
          </p>
        </div>

        <div className="feature-card">
          <FaUserShield className="feature-icon" />
          <h3 className="feature-title">User Privacy</h3>
          <p className="feature-text">
            Your health data stays protected with secure architecture.
          </p>
        </div>

        {/* <div className="feature-card">
          <FaLaptopCode className="feature-icon" />
          <h3 className="feature-title">Modern Tech Stack</h3>
          <p className="feature-text">
            Built using React, Node, MongoDB, and intelligent UI design.
          </p>
        </div> */}
      </div>

      <h2 className="projects-title">Our Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">LifeAI Dashboard</h3>
          <p className="project-text">
            Track health metrics with clean visualization and scoring system.
          </p>
        </div>

        <div className="project-card">
          <h3 className="project-title">Health Vitals Form</h3>
          <p className="project-text">
            Submit daily habits and get instant insights with AI logic.
          </p>
        </div>
      </div>
    </div>
  );
}
