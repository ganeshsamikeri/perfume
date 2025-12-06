import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import productRoutes from "./routes/productRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

// ------------------------------
// MIDDLEWARE
// ------------------------------
app.use(cors());
app.use(express.json());

// ------------------------------
// STATIC IMAGES FOLDER (FIXED)
// ------------------------------
// Correct absolute path to /public/images
const __dirname = path.resolve();

app.use(
  "/images",
  express.static(path.join(__dirname, "public", "images"))
);

// Example: http://localhost:5000/images/oud.jpg


// ------------------------------
// CONNECT TO MONGO DB
// ------------------------------
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));


// ------------------------------
// API ROUTES
// ------------------------------
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);


// ------------------------------
// START SERVER
// ------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
