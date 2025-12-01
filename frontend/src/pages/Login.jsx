import { useState } from "react";
import axios from "axios";
import { FiMail, FiLock } from "react-icons/fi";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        setError("Please fill in all fields.");
        return;
      }

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setSuccess("Login successful!");
      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
      setSuccess("");
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
          <span className="signup-link text-dark">Signup now </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
