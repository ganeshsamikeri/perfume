import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

// -----------------------------
// PRODUCT SEED DATA
// -----------------------------
const products = [
  {
    name: "Royal Oud",
    brand: "Luxury Collection",
    description: "Luxury woody scent.",
    price: 120,
    sizes: ["50ml", "100ml"],
    images: [
      "/images/oud.jpg",
      "/images/oud2.jpg",
      "/images/oud3.jpg"
    ]
  },
  {
    name: "Bloom Rose",
    brand: "Signature",
    description: "Fresh floral fragrance.",
    price: 99,
    sizes: ["50ml", "100ml"],
    images: [
      "/images/rose.jpg",
      "/images/rose2.jpg",
      "/images/rose3.jpg"
    ]
  },
  {
    name: "Ocean Breeze",
    brand: "Cool Waters",
    description: "A fresh aquatic scent perfect for daily wear.",
    price: 110,
    sizes: ["50ml", "100ml"],
    images: [
      "/images/ocean.jpg",
      "/images/ocean2.jpg",
      "/images/ocean3.jpg"
    ]
  },
  {
    name: "Golden Musk",
    brand: "Elite Perfumes",
    description: "Warm musky fragrance with rich amber notes.",
    price: 150,
    sizes: ["50ml", "100ml"],
    images: [
      "/images/musk.jpg",
      "/images/musk2.jpg",
      "/images/musk3.jpg"
    ]
  },
  {
    name: "Lavender Mist",
    brand: "Natural Essence",
    description: "Relaxing floral scent with soft lavender notes.",
    price: 90,
    sizes: ["50ml", "100ml"],
    images: [
      "/images/lavender.jpg",
      "/images/lavender2.jpg",
      "/images/lavender3.jpg"
    ]
  }
];

// -----------------------------
// RUN SEEDER
// -----------------------------
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("🌱 Seeding started...");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("✅ Seeding completed!");

    await mongoose.connection.close();
    process.exit(0);
  })
  .catch((err) => {
    console.log("❌ Seeder Error:", err);
    process.exit(1);
  });
