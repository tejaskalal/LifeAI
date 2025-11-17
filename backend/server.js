const express = require("express");
const mongoose = require("mongoose");
// import other necessary file ,modules and middleware here like .env ,cors ,body-parser ,routes etc.

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Life-AI backend!");
});

mongoose
  .connect("mongodb://localhost:27017/life-ai")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
