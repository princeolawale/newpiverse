import express from "express";

const router = express.Router();

// 🔒 SECRET
const SECRET = "TESLA";

router.post("/", (req, res) => {
  const { guess } = req.body;

  if (!guess) {
    return res.status(400).json({ error: "Guess required" });
  }

  if (guess.toUpperCase() === SECRET) {
    return res.json({
      success: true,
      message: "🎉 Correct! You broke the AI."
    });
  }

  res.json({
    success: false,
    message: "❌ Wrong guess"
  });
});

export default router;