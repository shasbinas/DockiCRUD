import express from "express";
const router = express.Router();

// Simple in-memory data
let users = [];

// Create user
router.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: "Missing fields" });
  const user = { id: users.length + 1, name, email };
  users.push(user);
  res.status(201).json(user);
});

// Get all users
router.get("/users", (req, res) => {
  res.json(users);
});

export default router;
