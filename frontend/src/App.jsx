import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
// import Sidebar from "./components/Sidebar";
import Support from "./components/Support";
import { Routes, Route } from "react-router-dom";
import Healthvitals from "./components/Healthvitals";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/healthvitals" element={<Healthvitals />} />
      </Routes>
    </>
  );
}

export default App;
