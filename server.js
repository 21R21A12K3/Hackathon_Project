// server.js
import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login request:", email, password);

  // Just for demo: always return success
  if (email && password) {
    return res.json({ success: true, message: "Login successfull!" });
  } else {
    return res.status(400).json({ success: false, message: "Invalid input" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
