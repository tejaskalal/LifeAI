import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Healthvitals from "./components/Healthvitals";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/healthvitals" element={<Healthvitals />} />
      </Routes>
    </>
  );
}

export default App;
