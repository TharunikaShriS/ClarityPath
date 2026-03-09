import express from 'express';
const router = express.Router();
import User from '../models/User.js'; // Ensure the .js is there!

// Signup Route
// Inside authRoutes.js
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body; // These must match the frontend exactly!
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ 
      message: "Account Created!", 
      token: "dummy-token-for-now" // Match what the frontend expects
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;