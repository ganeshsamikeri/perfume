import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";
import { StoreContext } from "../../context/StoreContext";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import { API_BASE_URL } from "../../config";   // ✅ ADD THIS

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useContext(StoreContext);

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const [related, setRelated] = useState([]);

  // ----------------------------
  // LOAD PRODUCT + REVIEWS + RELATED
  // ----------------------------
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/products/${id}`)
      .then((res) => {
        const p = res.data;
        setProduct(p);
        setSelectedSize(p.sizes?.[0] || "");

        // Load related products
        axios.get(`${API_BASE_URL}/api/products`).then((all) => {
          const filtered = all.data.filter(
            (item) => item.brand === p.brand && item._id !== p._id
          );
          setRelated(filtered.slice(0, 3));
        });
      })
      .catch((err) => console.log(err));

    // Load reviews
    axios
      .get(`${API_BASE_URL}/api/reviews/${id}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  // ----------------------------
  // SUBMIT REVIEW
  // ----------------------------
  const submitReview = (e) => {
    e.preventDefault();

    axios
      .post(`${API_BASE_URL}/api/reviews/${id}`, reviewData)
      .then((res) => {
        setReviews([...reviews, res.data]);
        setReviewData({ name: "", rating: 5, comment: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="product-page-container">
      {/* LEFT SIDE — IMAGE GALLERY */}
      <div className="image-section">
        <ImageGallery images={product.images} />
      </div>

      {/* RIGHT SIDE — PRODUCT DETAILS */}
      <div className="info-section">
        <h1>{product.name}</h1>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p className="description">{product.description}</p>

        <h2 className="price">₹{product.price}</h2>

        {/* SIZE SELECTOR */}
        <label>Select Size:</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {product.sizes?.map((size, i) => (
            <option key={i} value={size}>
              {size}
            </option>
          ))}
        </select>

        {/* ADD TO CART */}
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product, selectedSize)}
        >
          Add to Cart
        </button>

        {/* SHARE BUTTON */}
        <button
          className="share-btn"
          onClick={() => {
            navigator.share({
              title: product.name,
              text: product.description,
              url: window.location.href,
            });
          }}
        >
          Share Product
        </button>

        {/* REVIEWS SECTION */}
        <div className="reviews-section">
          <h2>Reviews</h2>

          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((rev, index) => (
              <div key={index} className="review-card">
                <h4>{rev.name} ⭐{rev.rating}</h4>
                <p>{rev.comment}</p>
              </div>
            ))
          )}

          {/* ADD REVIEW FORM */}
          <form onSubmit={submitReview} className="review-form">
            <input
              type="text"
              placeholder="Your Name"
              value={reviewData.name}
              onChange={(e) =>
                setReviewData({ ...reviewData, name: e.target.value })
              }
              required
            />

            <select
              value={reviewData.rating}
              onChange={(e) =>
                setReviewData({ ...reviewData, rating: e.target.value })
              }
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>

            <textarea
              placeholder="Your review..."
              value={reviewData.comment}
              onChange={(e) =>
                setReviewData({ ...reviewData, comment: e.target.value })
              }
              required
            />

            <button type="submit" className="submit-review-btn">
              Submit Review
            </button>
          </form>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="related-section">
        <h2>Related Products</h2>

        <div className="related-grid">
          {related.length === 0 ? (
            <p>No related products available.</p>
          ) : (
            related.map((item) => (
              <Link
                key={item._id}
                to={`/product/${item._id}`}
                className="related-card"
              >
                <img src={item.images?.[0]} alt={item.name} />
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
