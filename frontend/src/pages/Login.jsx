import { useState, useContext } from "react";
import axios from "axios";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn } = useContext(AuthContext);

  // page user wanted before login
  const from = location.state?.from || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        setError("Please fill in all fields.");
        setSuccess("");
        setTimeout(() => setError(""), 2000);
        return;
      }

      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      // save token
      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);

      setEmail("");
      setPassword("");
      setSuccess("Login successful!");
      setError("");

      // redirect back to requested page
      setTimeout(() => {
        setSuccess("");
        navigate(from, { replace: true });
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
      setSuccess("");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-box">
        <h2 className="login-heading text-dark">LOGIN</h2>

        {error && <p className="msg error">{error}</p>}
        {success && <p className="msg success">{success}</p>}

        <form onSubmit={handleSubmit}>
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

          <div className="remember">
            <input type="checkbox" />
            <span className="text-dark">Remember me</span>
          </div>

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>

        <div className="divider">Or login with</div>

        <div className="social-buttons">
          <button className="fb-btn">Facebook</button>
          <button className="google-btn">Google</button>
        </div>

        <p className="signup-text text-dark">
          Not a member?{" "}
          <span
            className="signup-link text-dark"
            onClick={() => navigate("/signup")}
            style={{ cursor: "pointer" }}
          >
            Signup now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
