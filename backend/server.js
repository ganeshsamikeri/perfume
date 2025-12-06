import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import productRoutes from "./routes/productRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

// --------------------------------------------------------------------
// MIDDLEWARE
// --------------------------------------------------------------------
app.use(cors());
app.use(express.json());

// --------------------------------------------------------------------
// STATIC IMAGE FOLDER (✔ FIXED FOR Render & Localhost)
// --------------------------------------------------------------------
const __dirname = path.resolve();  // Needed for ES modules

// Serve images from: backend/public/images
// Example: http://localhost:5000/images/rose.jpg
app.use("/images", express.static(path.join(__dirname, "public/images")));


// --------------------------------------------------------------------
// DATABASE CONNECTION
// --------------------------------------------------------------------
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));


// --------------------------------------------------------------------
// API ROUTES (✔ PREFIXES FIXED)
// --------------------------------------------------------------------
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);


// --------------------------------------------------------------------
// HOME ROUTE
// --------------------------------------------------------------------
app.get("/", (req, res) => {
  res.send("Perfume API is running 🚀");
});

// --------------------------------------------------------------------
// START SERVER
// --------------------------------------------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
