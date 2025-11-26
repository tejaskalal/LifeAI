import { use, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      {/* <Navbar /> */}
      <Home />
    </>
  );
}

export default App;
