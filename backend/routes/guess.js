import express from "express";

const router = express.Router();

// 🔒 SECRET (must exist)
const SECRET = "TESLA";

router.post("/", (req, res) => {
  const { guess } = req.body;

  if (!guess) {
    return res.status(400).json({ error: "Guess required" });
  }

  if (guess.toUpperCase() === SECRET) {
    return res.json({
      success: true,
      word: SECRET, // 🔥 important (for frontend reveal)
      message: "🎉 Correct! You broke the AI."
    });
  }

  res.json({
    success: false,
    message: "❌ Wrong guess"
  });
});

export default router;