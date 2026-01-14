import "./App.css";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Healthvitals from "./components/Healthvitals";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Terms from "./components/Terms";
import Signup from "./pages/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import ChatAi from "./components/ChatAi";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ChatAi />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai"
          element={
            <ProtectedRoute>
              <ChatAi />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/healthvitals"
          element={
            <ProtectedRoute>
              <Healthvitals />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
