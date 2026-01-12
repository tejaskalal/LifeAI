import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Healthvitals from "./components/Healthvitals";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Terms from "./components/Terms";
import Signup from "./pages/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/healthvitals" element={<Healthvitals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
