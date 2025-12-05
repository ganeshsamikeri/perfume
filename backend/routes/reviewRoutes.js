import express from "express";
import { getReviewsByProduct, addReview } from "../controllers/reviewController.js";

const router = express.Router();

// GET REVIEWS for a product
router.get("/:productId", getReviewsByProduct);

// POST REVIEW for a product
router.post("/:productId", addReview);

export default router;
