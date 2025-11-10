import express from "express";
const router = express.Router();
import mongoose from "mongoose";

// create schema & model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model("User", userSchema);

// create user
router.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "User created", data: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
