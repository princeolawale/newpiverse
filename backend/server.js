import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import chatRoute from "./routes/chat.js";
import guessRoute from "./routes/guess.js";
import marketsRoute from "./routes/markets.js"; // 🔥 added

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/chat", chatRoute);
app.use("/guess", guessRoute);
app.use("/markets", marketsRoute); // 🔥 added

// Health check
app.get("/", (req, res) => {
  res.send("NewPiverse backend running...");
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});