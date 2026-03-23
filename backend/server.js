import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import chatRoute from "./routes/chat.js";
import guessRoute from "./routes/guess.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/chat", chatRoute);
app.use("/guess", guessRoute);

// Health check
app.get("/", (req, res) => {
  res.send("NewPiverse backend running...");
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});