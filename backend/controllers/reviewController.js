import Review from "../models/Review.js";

export const getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addReview = async (req, res) => {
  try {
    const newReview = new Review({
      productId: req.params.productId,
      name: req.body.name,
      rating: req.body.rating,
      comment: req.body.comment,
    });

    await newReview.save();
    res.json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
