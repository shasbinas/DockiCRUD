import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
