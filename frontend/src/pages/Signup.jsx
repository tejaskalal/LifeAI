import { useState } from "react";
import axios from "axios";
import { FiMail, FiUser, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required!");
      setSuccess("");
      setTimeout(() => setError(""), 2000);
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        name,
        email,
        password,
      });

      setSuccess("Signup successful! You can now login.");
      setError("");
      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        setSuccess("");
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
      setSuccess("");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="login-bg">
      <div className="signup-box">
        <h2 className="signup-heading text-dark">SIGN UP</h2>

        {error && <p className="msg error">{error}</p>}
        {success && <p className="msg success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <FiUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-wrap">
            <FiMail className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-wrap">
            <FiLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="signup-btn">
            SIGN UP
          </button>
        </form>

        <p className="signup-text text-dark">
          Already have an account?{" "}
          <span
            className="signup-link text-dark"
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer" }}
          >
            Login now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
