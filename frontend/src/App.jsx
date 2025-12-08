import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Healthvitals from "./components/Healthvitals";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Terms from "./components/Terms";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/healthvitals" element={<Healthvitals />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
