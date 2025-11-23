import { use, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Sidebar />
      {/* <Navbar /> */}
      <Home />
      <Card />
    </>
  );
}

export default App;
